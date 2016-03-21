/**
 * Created by fabien on 02/03/2016.
 */
var myModule = angular.module('controllers');

myModule.controller('RecipeCreationCtrl', function($scope, $location, $routeParams, RecipeService, units, steps) {

    var recipeType = $routeParams.recipeType;
    $scope.recipeType =  recipeType;

        $scope.units = units;

        $scope.recipe =  {
            id:'MyRecipe',
            name:'MyRecipe',
            nbPerson:4,
            ingredients:[{qty:200, unit:units[1], food:'food'}],
            description:'Crazy recipe'
        };

        $scope.addRowIngredient = function(){
            var ingredient = {unit:'g'};//{qty:20, unit:units[2], food:'steack'};
            $scope.recipe.ingredients.push(ingredient);
        }
        $scope.removeRowIngredient = function(index,ingredient){
            //var index = $scope.recipe.ingredients.indexOf(ingredient); //fonctionne aussi tres bien
            $scope.recipe.ingredients.splice(index, 1); //le 1 indique combien d'element on remove a partir de index
        }


        $scope.addRecipe = function(recipe){
            recipe.recipeType = recipeType;
            switch(recipeType){
                case 'starter' : RecipeService.addStarter(recipe); break;
                case 'course' :  RecipeService.addCourse(recipe); break;
                case 'dessert' : RecipeService.addDessert(recipe); break;
            }
            $location.path("/recipe/"+recipeType);$location.hash(recipe.id);
        }

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
