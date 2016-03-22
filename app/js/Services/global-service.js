/**
 * Created by fabien on 19/03/2016.
 */

var myService = angular.module('services');
myService.service('GlobalService', function() {

    var id = 0;

    var showImprovement = true;

    var showHelp = false;
    var largeExpenseParameter = 'col-md-6';

    var showDebug = false;


    toggleHelp = function(){
        showHelp = ! showHelp;
        if(showHelp){
            largeExpenseParameter='col-md-12';
        }else{
            largeExpenseParameter='col-md-6';
        }
    }
    getHelp = function(){
        return showHelp;
    }
    getLargeExpenseParameter = function(){
        return largeExpenseParameter;
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
        getLargeExpenseParameter: getLargeExpenseParameter,
        getDebug: getDebug,
        incrementId: incrementId,
        getId: getId

    };
});