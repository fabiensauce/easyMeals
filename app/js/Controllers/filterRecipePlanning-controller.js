/**
 * Created by fabien on 07/04/2016.
 */

var myModule = angular.module('controllers');



myModule.controller('FilterCtrl', function($scope, $routeParams, $location, $window,  $log, RecipeService) {

    $scope.bonjour = "ahahah";


    $scope.$watch(function(){
        return $window.width;
    }, function(value) {
        $log.debug("ALLLRRR --------------------- : "+value);
    });

    var recipeType = $routeParams.recipeType;
    var recipeId = $routeParams.id;
    $scope.recipeType = recipeType;
    $scope.recipeId = recipeId;
    $scope.recipe = RecipeService.getSingleRecipe(recipeType, recipeId);
    $scope.showRecipe = $scope.recipe != null;

});