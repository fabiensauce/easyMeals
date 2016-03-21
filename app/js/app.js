/**
 * Created by fabien on 02/03/2016.
 */


angular.module('myApp', ['controllers','ngRoute'] )
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/welcomeMeal', {templateUrl: '../partials/welcomeMeal.html', controller: 'WelcomeMealCtrl'})
                .when('/recipe/:recipeType', {templateUrl: '../partials/recipe.html', controller:'RecipeCtrl'})
                .when('/recipeCreation/:recipeType', {templateUrl: '../partials/recipeCreation.html', controller:'RecipeCreationCtrl'})
                .when('/planning', {templateUrl: '../partials/planning.html', controller: 'PlanningCtrl'})
                .when('/calculationExpense', {templateUrl: '../partials/calculationExpense.html', controller:'CalculationExpenseCtrl'})
                .when('/calculationAlcohol', {templateUrl: '../partials/calculationAlcohol.html', controller:'CalculationAlcoholCtrl'})
                .when('/grilleImpot', {templateUrl: '../partials/grilleImpot.html', controller:'GrilleImpotCtrl'})
                .when('/testDirective', {templateUrl: '../partials/testDirective.html', controller:'TestDirectiveCtrl'})
                .otherwise({ redirectTo: '/welcomeMeal' });
        }]);