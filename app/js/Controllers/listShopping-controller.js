/**
 * Created by fabien on 14/03/2016.
 */

myModule.controller('ListShoppingCtrl', function($scope, $location, $log, PlanningService, RecipeService, fourTypeMeal, units, steps) {

    /**
     * LIST SHOPPING
     */
    /*$scope.listShop = [
        {qty:0.6,unit:"kg",food:"aubergine", rayon:'Fruit & Legumes'},
        {"qty":2.4,"unit":"g","food":"cod"},
        {"qty":200,"unit":"g","food":"flour"},
        {"qty":40,"unit":"cl","food":"milk"},
        {"qty":4,"unit":"","food":"egg"},
        {"qty":50,"unit":"g","food":"tomato", rayon:'Fruit & Legumes'},
        {"qty":4,"unit":"","food":"bread"},
        {"qty":400,"unit":"g","food":"steack"}
    ];*/
    $scope.listShop = [];

    /*
    ng-click : "Générer liste de course"
     */
    $scope.calculListShopping = function(){
        var meals = [];
        var recipes = [];
        var nbPersTmp = 0;
        var recipe = {};
        var multIngr = 0;
        var ingredient = {};
        var ingrTmp = {};
        var newQtity = 0;
        var newUnit = '';
        var newFood = '';
        var newRayonId = 0;

        var listShop = [];
        var fourMeals = $scope.fourWeekMeals;// [$scope.breakfasts, $scope.lunchs, $scope.snacks, $scope.dinners];
        for(var a=0; a<fourMeals.length; a++){
            meals = fourMeals[a].weekMeals;
            for(var i=0; i<meals.length; i++){
                recipes = meals[i].recipes; //list recipe
                nbPersTmp = meals[i].nbPers;
                for(var j=0; j<recipes.length; j++){
                    recipe = recipes[j];
                    if(typeof recipe != 'number'){
                        multIngr = nbPersTmp/recipe.nbPerson;
                        for(var k=0; k<recipe.ingredients.length; k++){
                            ingredient = recipe.ingredients[k];
                            newQtity = multIngr*ingredient.qty;
                            newUnit = ingredient.unit;
                            newFood = ingredient.food;
                            newRayonId = ingredient.rayonId;
                            ingrTmp = {qty:newQtity, unit:newUnit, food:newFood, rayonId:newRayonId};
                            listShop.push(ingrTmp);
                        }
                    }else{
                        //ON ne traite pas if its a number
                    }
                }
            }
        }

        $scope.listShop = mergeDuplicateIngredients(listShop);

        //$location.path("/creationPlanning");$location.hash('listShopping'); //?????? fonctionne pas

        $scope.$broadcast('reCalculateCategories', $scope.listShop); //will tell to child (CustomizeShoppingCtrl to recalculate categories lists)

    }

    var mergeDuplicateIngredients = function(listShop){
        var ingredient = {}; //{"qty":50,"unit":"g","food":"tomato"}
        var ingredient2 = {};
        for(var i=0; i<listShop.length; i++){
            ingredient = listShop[i];
            if(ingredient.food != ''){
                var food = ingredient.food;
                for(var j=i+1; j<listShop.length; j++){
                    ingredient2 = listShop[j];
                    if(ingredient.food == ingredient2.food || ingredient.food+'s' == ingredient2.food || ingredient.food == ingredient2.food+'s'){
                        var newQty = calculQty(ingredient, ingredient2);
                        if(ingredient.qty < newQty){
                            ingredient2.food = '';
                            ingredient.qty = newQty;
                        }
                    }
                }
            }
        }

        //REMOVE ingredient empty
        for(var k=listShop.length-1; k>=0; k--) {
            if (listShop[k].food == '') {
                listShop.splice(k, 1);
            }
        }
        return listShop;
    }

    var calculQty = function(ing1, ing2){
        var unit1=ing1.unit;
        var unit2=ing2.unit;
        var qty1=ing1.qty;
        var qty2=ing2.qty;
        if(unit1 == unit2){
            return qty1+qty2;
        }
        else{
            switch(unit1){
                case 'g' : if(unit2=='kg'){return qty1+qty2*1000} else{return qty1};
                case 'kg' :  if(unit2=='g'){return qty1+qty2/1000} else{return qty1};
                case 'cl' :  if(unit2=='l'){return qty1+qty2*100} else{return qty1};
                case 'l' :  if(unit2=='cl'){return qty1+qty2/100} else{return qty1};
                default: return qty1;
            }
        }
    }


    $scope.getIngrUnitDisplay = function(ingredientUnit){
        if(ingredientUnit != ''){
            return (ingredientUnit + ' of');
        }else {
            return ' piece(s) of';
        }
    }


});
