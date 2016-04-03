/**
 * Created by fabien on 13/03/2016.
 */
var myModule = angular.module('controllers');

myModule.controller('RecipeCtrl', function($scope, $routeParams, RecipeService) {


    $scope.$emit('intoRecipe'); //will tell to parents (global-controller.js) to modify pix


    var recipeType = $routeParams.recipeType;
    $scope.recipeType = recipeType;

    var getRecipes = function(recipeType){
        switch(recipeType){
            case 'starter' : return RecipeService.getStarters();
            case 'course' :  return RecipeService.getCourses();
            case 'dessert' : return RecipeService.getDesserts();
            case 'breakfast' : return RecipeService.getBreakfasts();
            default:  $scope.recipeType = 'ERROR';
        }
    }
    $scope.recipes = getRecipes(recipeType);

    $scope.recipesWithFilter = $scope.recipes;

    $scope.displayRecipeType = function(){
        switch($scope.recipeType){
            case 'starter' : return 'Entrées';
            case 'course' :  return 'Plats';
            case 'dessert' : return 'Desserts';
            case 'breakfast' : return 'Déjeuners - Goûters';
        }
    }
    $scope.displayCreationRecipeType = function(){
        switch($scope.recipeType){
            case 'starter' : return 'Créer une nouvelle Entrée';
            case 'course' :  return 'Créer un nouveau Plat';
            case 'dessert' : return 'Créer un nouveau Dessert';
            case 'breakfast' : return 'Créer un nouveau Dej/Goûter';
        }
    }
   // $scope.courses = RecipeService.getCourses();


    $scope.getIngrUnitDisplay = function(ingredientUnit){
        if(ingredientUnit != ''){
            return (ingredientUnit + ' of');
        }
        else {

            return ' piece(s) of';
        }
    }

    $scope.toggleDescOpen = function(recipe){
        recipe.descriptionOpen = !recipe.descriptionOpen;
    }
    $scope.fuck = function(){
        alert("BIBADABOOM");
    }
});








myModule.directive("scroll", function ($window, $log) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            if (this.pageYOffset >= 100) {
                scope.boolNavFixed = true;
                /*element.css({
                    top: '0px',
                    position: 'fixed'
                });
                 element.removeClass('col-xs-4');
                 element.addClass('col-xs-3');
                 element.next().addClass('col-xs-offset-3');
                 $log.warn("BOOM - element : >"+element.contents());
                 */
            } else {

                scope.boolNavFixed = false;
                /*element.css({
                    top: "auto",
                    position: 'static'
                });*/
            }
            scope.$apply();
        });
    };
});