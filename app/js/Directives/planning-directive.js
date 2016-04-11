/**
 * Created by fabien on 15/03/2016.
 */

var myDirective = angular.module('directives');
//var myModule = angular.module('controllers');


/* TEST avec scope : dans planning-controller.js ->
 $scope.helloTest = "aie aie HELLO UU";
 */
myDirective.directive('helloTest', function(){
    return{
        restrict:'E',
        template: "<div> <div>hello my DARLING !!</div> <div> HEYE</div> <div>{{helloTest}}</div> </div>",
        replace:true,
        scope:true,
        link: function(scope, element, attrs){
            scope.helloTest = 'KA - BOOMM !!';
        }

    } ;
});






myDirective.directive('planningRecipes', function(){
    return{
        restrict:'E',
        templateUrl:'../../partials/planning/planningRecipes.html',
        replace:true

    } ;
});
myDirective.directive('planningTofill', function(){
    return{
        restrict:'E',
        templateUrl:'../../partials/planning/planningToFill.html',
        replace:true

    } ;
});
/*  avant : planningListShopping ( <planning-listShopping> ) fonctionnait... ^^*/
myDirective.directive('planningListshopping', function(){
    return{
        restrict:'E',
        templateUrl:'../../partials/planning/planningListShopping.html',
        replace:true

    } ;
});