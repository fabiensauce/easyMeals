/**
 * Created by fabien on 15/03/2016.
 */


var myModule = angular.module('controllers');

myModule.controller('PlanningCtrl', function($scope, $log, RecipeService, fourTypeMeal, units, steps) {


    $scope.$emit('intoPlanning'); //will tell to parents (global-controller.js) to modify pix


    /**
     * RECIPES LIST ...
     */
    $scope.recipeType = 'course';
    var getRecipes = function(recipeType){
        switch(recipeType){
            case 'starter' : return RecipeService.getStarters();
            case 'course' :  return RecipeService.getCourses();
            case 'dessert' : return RecipeService.getDesserts();
            case 'breakfast' : return RecipeService.getBreakfasts();
            case 'cocktail' : return RecipeService.getCocktails();
            default:  $scope.recipeType = 'ERROR';
        }
    }
    $scope.recipes = getRecipes($scope.recipeType);
    $scope.selectRecipes = function(recipeType){
        $scope.recipeType = recipeType;
        $scope.recipes = getRecipes(recipeType);
        $scope.$broadcast('updateFilter');
    }

    $scope.displayRecipeType = function(){
        switch($scope.recipeType){
            case 'starter' : return 'Entrees';
            case 'course' :  return 'Plats';
            case 'dessert' : return 'Desserts';
            case 'breakfast' : return 'Petit Dej - Gouter';
            case 'cocktail' : return 'Cocktails';
        }
    }


    $scope.displayIngredientsOfRecipe = function(recipe){
        var str='';
        for(var i=0; i<recipe.ingredients.length; i++){
            str = str+"\n"+recipe.ingredients[i].qty+recipe.ingredients[i].unit+' '+recipe.ingredients[i].food;
        }
        return str;
    }


    /**
     * PLANNING Construction
     */
    $scope.displayMealType = function(mealType){
        switch(mealType){
            case 'breakfast' : return 'Petit déjeuner';
            case 'lunch' :  return 'Repas du midi';
            case 'snack' : return 'Goûter';
            case 'dinner' : return 'Dîner';
        }
    }

    $scope.planningInitialized = false;


    $scope.globalNbPers = 4;
    $scope.spreadGlobalNbPers = function(nb){
        var fourWeekMeals = $scope.fourWeekMeals;
        for(var i=0; i<fourWeekMeals.length; i++){
            var weekMeals = fourWeekMeals[i].weekMeals;
            for(var j=0; j<weekMeals.length; j++){
                weekMeals[j].nbPers = nb; //fonctionne par reference :) (pointeurs)
            }
        }
    }
    $scope.showNbPers = false;
    $scope.nbPers = 4;

    /*
     //fourWeekMeals = [aWeekMealLunch, aWeekMealDinner, .., ..]
     //aWeekMeal = {id: , typeMeal: lunch, show:true, weekMeals:[meal1, meal2, ..., meal7]}
     //meal = {id: lunch4, nbPers:5 , recipes:[recipe1, recipe2, ...]} //ex lunch of thursday
     //recipe =  {id:'1',name:'burger',recipeType:'course',nbPerson:4,ingredients:[{qty:400, unit:'g', food:'steak'},{qty:4, unit:'', food:'bread'}],description:'faire des burgers'}
     */
    var initFourWeekMeals = function(nbDay){
        var fourWeekMeals = [];
        for(var i=0; i<fourTypeMeal.length; i++){
            var typeMeal = fourTypeMeal[i];
            var weekMeals = [];
            for(var j=0; j<nbDay; j++){
                var meal = {id: typeMeal+j, nbPers:$scope.globalNbPers, recipes:[]};
                weekMeals.push(meal);
            }
            var varShow=false;
            if(typeMeal == 'lunch' || typeMeal == 'dinner'){
                varShow=true;
            }
            var aWeekMeal = {id:i, typeMeal:typeMeal, show:varShow, weekMeals:weekMeals};
            fourWeekMeals.push(aWeekMeal);
        }
        return fourWeekMeals;
    }


    $scope.fourWeekMeals = initFourWeekMeals(7);


    $scope.onOverTrash = function(){
        document.getElementById("trashPlanning").style.color = 'orange';
    }
    $scope.onOutTrash = function(){
        document.getElementById("trashPlanning").style.color = '#5bc0de';
    };
    /*
    $scope.onOverTab = function(vaa){
        alert(vaa);
    }*/

    $scope.dataDropTrash = true; //pas vraiment utilisé mais ne pas supprimer cette ligne sans enlever {{dataDropTrash}} du data-drop de la trash
    $scope.trash = []

    $scope.quickRecipe = {
        id:'',
        name:'',
        nbPerson:1,
        ingredients:[{qty:100, unit:'g', food:'chocolate'}],
        description:''
    }
    $scope.units = units;
    $scope.step = 25;
    $scope.changeValSelect = function(ingredient){
        var unit = ingredient.unit;
        for(var i=0; i<units.length; i++){
            if(unit == units[i]){
                //ingredient.qty = 0;
                $scope.step = steps[i];
            }
        }
        return 0;
    }
});

myModule.filter('orderByRecipeType', function($log){
    var sortRecipeType = function(input){
        var recipesReordered = [];
        var arrRecipeType=['starter','course','dessert'];//ordre filter
        for(var i=0; i<arrRecipeType.length; i++){
            for(var j=0; j<input.length; j++){
                if(input[j].recipeType == arrRecipeType[i]){
                    recipesReordered.push(input[j]);
                }
            }
        }
        return recipesReordered;
    };
    return sortRecipeType;
});