/**
 * Created by fabien on 04/03/2016.
 */
var myModule = angular.module('controllers');


myModule.controller('GrilleImpotCtrl', function($scope) {

    $scope.revenusBrut = 30000;

    $scope.listRevenusBrut = [
        38000, 39000, 40000, 41000, 42000, 43000, 44000, 45000, 50000
    ];


    $scope.revenusNet = function(revenusBrut){
        return revenusBrut*0.76;
    };

    $scope.brutMensuel = function(revenusBrut){
        return revenusBrut/12;
    };

    $scope.netMensuel = function(revenusBrut){
        return revenusBrut*0.76/12;
    };

    $scope.impotsAnnuel = function(revenusBrut){
        var revNet = $scope.revenusNet(revenusBrut);
        if(revNet > 26791){
            return ((revNet - 26791)*0.3) + 2393;
        }
        else if(revNet > 9700){
            return ((revNet - 9700)*0.14);
        }
        else{
            return 0;
        }
    };
    $scope.revenuMensuelNetDimpots = function(revenusBrut){
        return ($scope.revenusNet(revenusBrut)-$scope.impotsAnnuel(revenusBrut))/12;
    };

    $scope.revenuMensuelNetDimpotsWithVac = function(revenusBrut){
        revenusBrut = revenusBrut/12 * 11;
        return ($scope.revenusNet(revenusBrut)-$scope.impotsAnnuel(revenusBrut))/12;
    }
});