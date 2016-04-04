/**
 * Created by fabien on 03/04/2016.
 */

var myDirective = angular.module('directives');




myDirective.directive('recipeFilter', function(){
    return{
        restrict:'E',
        templateUrl:'../../partials/recipe/recipeFilter.html',
        replace:true

    } ;
});
myDirective.directive('recipeList', function(){
    return{
        restrict:'E',
        templateUrl:'../../partials/recipe/recipeList.html',
        replace:true

    } ;
});