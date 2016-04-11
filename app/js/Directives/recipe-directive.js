/**
 * Created by fabien on 03/04/2016.
 */

var myDirective = angular.module('directives');



/**
 * **************************************   DIRECTIVES : ng-include  *********************************************************************************************
 */

/*****************************
 *  2 MAIN PARTS of recipe
 *****************************/
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


/*  Display of recipeItems in block/list, open or not
 * In HTML it can be REPLACE by
 * <div ng-include="'../../partials/recipe/recipeItemDisplayNotOpenInList.html'"></div>
 */
myDirective.directive('recipeitemDisplayinlist', function(){
    return{
        restrict:'E',
        templateUrl:'../../partials/recipe/recipeItemDisplayNotOpenInList.html',
        replace:true

    } ;
});
myDirective.directive('recipeitemDisplayinblock', function(){
    return{
        restrict:'E',
        templateUrl:'../../partials/recipe/recipeItemDisplayNotOpenInBlock.html',
        replace:true

    } ;
});
myDirective.directive('recipeitemDisplayopen', function(){
    return{
        restrict:'E',
        templateUrl:'../../partials/recipe/recipeItemDisplayOpen.html',
        replace:true

    } ;
});






/**
 * **************************************   scroll for recipeFilter  *********************************************************************************************
 */

myDirective.directive("scroll", function ($window, $log) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            var filterRecipe = document.getElementById('filterRecipe');
            $log.debug("taille de lengin :  "+filterRecipe.clientHeight);
            if(filterRecipe.clientHeight < 700){
                if (this.pageYOffset >= 100) {
                    scope.boolNavFixed = true;
                }else {
                     scope.boolNavFixed = false;
                }
                scope.$apply();
            }else{
                $log.debug("ON LE LAISSE FIXE CE CON !!");
                scope.boolNavFixed = false;
            }
            /*
            if (this.pageYOffset >= 500) {

                $log.debug("boom dcsdsds "+document.getElementById('filterRecipe').clientHeight);


                element.css({
                 marginTop:'700px'
                 });
            } else {
                element.css({
                    marginTop:'0px'
                });
            }*/
            scope.$apply();
        });
    };
});
/*
myDirective.directive("scroll", function ($window, $log) {
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
                 *
            } else {

                scope.boolNavFixed = false;
                /*element.css({
                 top: "auto",
                 position: 'static'
                 });*
            }
            scope.$apply();
        });
    };
});
*/



/**
 * **************************************   buttons filter in recipeFilter  *********************************************************************************************
 */
myDirective.directive('buttonSelection', function(){
    return{
        restrict:'EA',
        transclude:true,
        scope: { filtertype: '@filterType',
            /*filtername: '=filterName'*/},
        template: '<button  type="button" class="myBtn btn-defaultRecipe" >'+
        '<span class="glyphicon glyphicon-minus littlePlus" ></span>'+
        '<span class="txtTitleSelection">{{filtertype}}</span> <span class="txtSelection" ng-transclude ></span>'+
        '</button>'


    } ;
});
myDirective.directive('buttonFilter', function(){
    return{
        restrict:'EA',
        transclude:true,
        template:   '<button  type="button" class="myBtn btn-defaultRecipe" >'+
        '<span class="glyphicon glyphicon-plus littlePlus"></span>'+
        '<span class="txtFilter" ng-transclude></span>'+
        '</button>'

    } ;
});


/**
 * **************************************   PASSER VAR avec DIRECTIVES  *********************************************************************************************
 *
 * HTML
 * <button-Filterisolatescope the-origin="myList.name"></button-Filterisolatescope>
 *
 * ainsi l'object (ou string) -ici myList- est passé dans the-origin est recup ds l'isolate scope avec =theOrigin
 * si par ex ds Html, the-origin="myList", lobjet est donc passé ds la var originIsolate, sur lequel on peut appeler originIsolate.name
 *
 myDirective.directive('buttonFilterisolatescope', function(){
    return{
        restrict:'EA',
        replace:true,
        scope: { originIsolate: '=theOrigin'},
        template:'<button  type="button" class="btn btn-defaultRecipe" >'+
        '<span class="glyphicon glyphicon-plus littlePlus"></span>'+
        '<span class="txtFilter">{{originIsolate}}</span>'+
        '</button>'

    } ;
});
 */


