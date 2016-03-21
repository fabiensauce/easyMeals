/**
 * Created by fabien on 19/03/2016.
 */

var myModule = angular.module('controllers');

myModule.controller('WelcomeMealCtrl', function($scope, $log) {
    $scope.bonjour='salut les potes !';
});
