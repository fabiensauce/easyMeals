/**
 * Created by fabien on 03/03/2016.
 */

var myService = angular.module('services');
myService.service('PlanningService', function() {

    var starters = {name:'Starters', list:["feuillees sauciesses", "legumes", "belins", "cognac !!"]};
    var courses = {name:'Courses', list:["burgers", "lasagna","lasagn4a", "cod curry sauce", "quenelles", "raclettes", "lasagn1a","lasag1n4a", "co1d curry sauce", "quenell1es", "ra1lettes", "lasag2na","lasa2gn4a", "cod curr2y sauce", "quen2elles", "racl2ettes", "las3agna","lasa3gn4a", "cod cur3ry sauce", "quenell3es", "raclet3tes"]};
    var desserts = {name:'Desserts', list:["crepes", "bananes flambees"]};

    getStarters = function(){
        return starters;
    };
    getCourses = function(){
        return courses;
    };
    getDesserts = function(){
        return desserts;
    };

        return {
            getStarters: getStarters,
            getCourses: getCourses,
            getDesserts: getDesserts
        };
    })

    .constant('fourTypeMeal',
        ['breakfast', 'lunch', 'snack', 'dinner']
    );
