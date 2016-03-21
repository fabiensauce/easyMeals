/**
 * Created by fabien on 19/03/2016.
 */


var myModule = angular.module('controllers');

myModule.controller('GlobalCtrl', function($scope, $log, GlobalService) {

    /**
     * Pour avoir une variable "global" utilisable entre les differentes section/view
     * il faut passer par un service (ici global-service) autrement les variables initialisee
     * uniquement ici dans le controller vont etre remise a zero a chaque fois que l'on recherche la view...
     *
     */

    $scope.showImprovement=GlobalService.getImprovement();
    $scope.toggleImpr = function(){
        GlobalService.toggleImprovement();
        $scope.showImprovement=GlobalService.getImprovement();
    }
   //$scope.$watch('showImprovement', toggleImpr);
    // CE WATCH NE FONCTIONNE PAAAAS => toggleImpr est un $SCOPE et devrait etre : var toggleImpr

    $scope.myId = GlobalService.getId();
    $scope.incrementId = function(){
        GlobalService.incrementId();
        $scope.myId = GlobalService.getId();
    }


});
