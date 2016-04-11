/**
 * Created by fabien on 13/03/2016.
 */
var myModule = angular.module('controllers');



myModule.controller('RecipeCtrl', function($scope, $routeParams, $location, $window,  $log, RecipeService) {

    /*
    $scope.$watch(function(){
        return $window.width;
    }, function(value) {
        $log.debug("ALLLRRR --------------------- : "+value);
    });
     */
    $scope.$emit('intoRecipe'); //will tell to parents (global-controller.js) to modify pix

    var recipeType = $routeParams.recipeType;
    $scope.recipeType = recipeType;
    var recipeSelection = $routeParams.selection;
    $scope.recipeSelection = recipeSelection;

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
    $scope.recipes = getRecipes(recipeType);


    $scope.displayRecipeType = function(){
        switch($scope.recipeType){
            case 'starter' : return 'Entrées';
            case 'course' :  return 'Plats';
            case 'dessert' : return 'Desserts';
            case 'breakfast' : return 'Déjeuners - Goûters';
            case 'cocktail' : return 'Cocktails';
        }
    }
    $scope.displayCreationRecipeType = function(){
        switch($scope.recipeType){
            case 'starter' : return 'Créer une nouvelle Entrée';
            case 'course' :  return 'Créer un nouveau Plat';
            case 'dessert' : return 'Créer un nouveau Dessert';
            case 'breakfast' : return 'Créer un nouveau Dej/Goûter';
            case 'cocktail' : return 'Créer un nouveau Cocktail';
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

    $scope.showInList = true;
    $scope.showInBlock = false;

    $scope.showInListFct = function(){
        $scope.showInList = true;
        $scope.showInBlock = false;
    }
    $scope.showInBlockFct = function(){
        $scope.showInList = false;
        $scope.showInBlock = true;

    }

    /* ICI !!!! doit communiquer avec filter controller (broadcast) */
    $scope.toggleIsFavorite = function(recipe, event){
        event.stopPropagation();
        recipe.isFavorite = !recipe.isFavorite;
        $scope.$broadcast('updateFilter');
    }
    $scope.toggleIsForPlanning = function(recipe, event){
        event.stopPropagation();
        recipe.isForPlanning = !recipe.isForPlanning;
        $scope.$broadcast('updateFilter');
    }
    $scope.openRecipeNewWindow = function(id) {
        event.stopPropagation();
        $window.open('http://localhost:9000/#/singleRecipe/'+$scope.recipeType+'/'+id);
    };
    /*$scope.reloadRoute = function() {
        alert("bjr");
        $route.reload();
        $location.search( 'viande', null );
    }*/


});