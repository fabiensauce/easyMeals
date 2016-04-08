/**
 * Created by fabien on 19/03/2016.
 */

var myService = angular.module('services');
myService.service('GlobalService', function() {

    var id = 0;

    var showImprovement = true;

    var showHelp = false;

    var showDebug = false;



    toggleHelp = function(){
        showHelp = ! showHelp;
    }
    getHelp = function(){
        return showHelp;
    }


    toggleImprovement = function(){
        showImprovement = !showImprovement;
    }
    getImprovement = function(){
        return showImprovement;
    }
    toggleDebug = function(){
        showDebug = !showDebug;
    }
    getDebug = function(){
        return showDebug;
    }

    incrementId = function(){
        id++;
    }
    getId = function(){
        return id;
    }

    return {
        toggleImprovement: toggleImprovement,
        toggleHelp: toggleHelp,
        toggleDebug: toggleDebug,
        getImprovement: getImprovement,
        getHelp: getHelp,
        getDebug: getDebug,
        incrementId: incrementId,
        getId: getId

    };
});