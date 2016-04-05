/**
 * Created by fabien on 02/03/2016.
 */


angular.module('myApp', ['controllers','ngRoute'] )
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/welcomeMeal', {templateUrl: '../partials/others/welcomeMeal.html', controller: 'WelcomeMealCtrl'})
                //.when('/oldRecipe/:recipeType', {templateUrl: '../partials/recipe/oldRecipe.html', controller:'RecipeCtrl'})
                .when('/recipe/:recipeType/:selection?', {templateUrl: '../partials/recipe/recipe.html', controller:'RecipeCtrl'})
                .when('/singleRecipe/:recipeType/:id', {templateUrl: '../partials/recipe/singleRecipe.html', controller:'SingleRecipeCtrl'})


                .when('/recipeCreation/:recipeType', {templateUrl: '../partials/recipe/recipeCreation.html', controller:'RecipeCreationCtrl'})
                .when('/planning', {templateUrl: '../partials/planning/planning.html', controller: 'PlanningCtrl'})
                .when('/calculationExpense', {templateUrl: '../partials/others/calculationExpense.html', controller:'CalculationExpenseCtrl'})
                .when('/calculationAlcohol', {templateUrl: '../partials/others/calculationAlcohol.html', controller:'CalculationAlcoholCtrl'})
                .when('/grilleImpot', {templateUrl: '../partials/others/grilleImpot.html', controller:'GrilleImpotCtrl'})
                .when('/testDirective', {templateUrl: '../partials/others/testDirective.html', controller:'TestDirectiveCtrl'})
                .otherwise({ redirectTo: '/welcomeMeal' });
        }]);