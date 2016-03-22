/**
 * Created by fabien on 14/03/2016.
 */

myModule.controller('CustomizeShoppingCtrl', function($scope, $log, PlanningService, RecipeService, fourTypeMeal, units, steps) {



    // $scope.listShop = [];
    $scope.categories = [{name:'Fruit/Legumes', ingredients:[]}, {name:'Surgeles', ingredients:[]}, {name:'Frais', ingredients:[]}, {name:'Poissons', ingredients:[]}, {name:'Viandes', ingredients:[]}];
    $scope.categoryChosen = 'Surgeles';
    $scope.modifQty = false;
    $scope.toggleModifQty = function(){
        $scope.modifQty = ! $scope.modifQty;
    }


    $scope.showListShopping = function(){
        for(var i=0; i<$scope.categories.length; i++){
            if($scope.categories[i].ingredients.length > 0){
                return true;
            }
        }
        return $scope.listShop.length>0;
    }
    /* display for "showListShopping()"
    $scope.elemNotEmptyListShopping = function(){
        for(var i=0; i<$scope.categories.length; i++){
            if($scope.categories[i].ingredients.length > 0){
                return $scope.categories[i].name;
            }
        }
        return "list shop not empty ";//+$scope.listShop.[0].food;
    }
    */

    //the parent scope (ListShoppingCtrl) sent broadcast to say we need to reset categories lists
    $scope.$on('resetCategories', function() {
        //reset all categories
        for(var i=0; i<$scope.categories.length; i++){
            $scope.categories[i].ingredients = [];
        }
    });

    $scope.newIngredient = {qty:null, unit:'', food:''};

    $scope.addIngredientList = function(ingr){
        var newIngr = JSON.parse(JSON.stringify(ingr));//NEW OBJECT
        $scope.listShop.push(newIngr);
    }
    $scope.addCategoryList = function(catName){
        var newCat = {name:catName, ingredients:[]};//JSON.parse(JSON.stringify(cat));//NEW OBJECT
        $scope.categories.push(newCat);
    }


    $scope.trashIngredientFromListShop = function(ingr){
        var index = $scope.listShop.indexOf(ingr); //fonctionne aussi tres bien
        $scope.listShop.splice(index, 1);
    }
    $scope.trashIngredientFromCategorie = function(category, ingr){
        var index = category.ingredients.indexOf(ingr); //fonctionne aussi tres bien
        category.ingredients.splice(index, 1);
    }
    $scope.moveListToCategory = function(ingr){
        for(var i=0; i<$scope.categories.length; i++){
            if($scope.categories[i].name == $scope.categoryChosen){
                $scope.categories[i].ingredients.push(ingr);
            }
        }
        var index = $scope.listShop.indexOf(ingr); //fonctionne aussi tres bien
        $scope.listShop.splice(index, 1);
    }

    $scope.moveCategoryToList = function(category, ingr){

        var index = category.ingredients.indexOf(ingr); //fonctionne aussi tres bien
        category.ingredients.splice(index, 1);
        $scope.listShop.push(ingr);
    }

});