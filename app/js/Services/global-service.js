/**
 * Created by fabien on 19/03/2016.
 */

var myService = angular.module('services');
myService.service('GlobalService', function() {

    var id = 0;
    var showImprovement = true;



    toggleImprovement = function(){
        showImprovement = !showImprovement;
    }
    getImprovement = function(){
        return showImprovement;
    }

    incrementId = function(){
        id++;
    }
    getId = function(){
        return id;
    }

    return {
        toggleImprovement: toggleImprovement,
        getImprovement: getImprovement,
        incrementId: incrementId,
        getId: getId

    };
});