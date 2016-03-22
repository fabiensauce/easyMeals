/**
 * Created by fabien on 15/03/2016.
 */

var myDirective = angular.module('directives');
//var myModule = angular.module('controllers');


myDirective.directive('helloTest', function(){
    return{
        restrict:'E',
        templateUrl: '../../partials/creationPlanningHtml/hello.html',
        replace:true,
        scope:true,
        link: function(scope, element, attrs){
            scope.helloTest = 'KA - BOOMM !!';
        }

    } ;
});



myDirective.directive('recipesPlanning', function(){
    return{
        restrict:'E',
        templateUrl:'../../partials/creationPlanningHtml/recipesPlanning.html',
        replace:true

    } ;
});
myDirective.directive('planningTofill', function(){
    return{
        restrict:'E',
        templateUrl:'../../partials/creationPlanningHtml/planningToFill.html',
        replace:true

    } ;
});
myDirective.directive('listShopping', function(){
    return{
        restrict:'E',
        templateUrl:'../../partials/creationPlanningHtml/listShopping.html',
        replace:true

    } ;
});