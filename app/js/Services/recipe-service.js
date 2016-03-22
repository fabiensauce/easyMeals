/**
 * Created by fabien on 02/03/2016.
 */

var myService = angular.module('services');
myService.service('RecipeService', function() {

    var id = 0;
        var starters = [
            {
                id:'rouleauxPrintemps',
                name:'rouleaux printemps',
                recipeType:'starter',
                nbPerson:4,
                ingredients:[{qty:50, unit:'g', food:'rouleauPrintemp'},{qty:4, unit:'', food:'bread'},{qty:400, unit:'g', food:'courgette'}],
                description:'faire des burgers ahahah'
            },
            {
                id:'papillotes',
                name:'papillotes',
                recipeType:'starter',
                nbPerson:2,
                ingredients:[{qty:0.3, unit:'kg', food:'poisson'}],
                description:'le cabillaud c le meilleur'
            },
            {
                id:'feuilletees',
                name:'feuilletees',
                recipeType:'starter',
                nbPerson:2,
                ingredients:[{qty:10, unit:'', food:'saucisse'},{qty:1, unit:'', food:'pate feuillete'}, {qty:3, unit:'', food:'egg'}],
                description:'feuilletes'
            }
        ];

        var courses = [
            {
                id:'burgers',
                name:'burgers',
                recipeType:'course',
                nbPerson:4,
                ingredients:[{qty:50, unit:'g', food:'tomato'},{qty:4, unit:'', food:'bread'},{qty:400, unit:'g', food:'steack'}],
                description:'faire des burgers ahahah'
            },
            {
                id:'poisson',
                name:'cabillaud four',
                recipeType:'course',
                nbPerson:2,
                ingredients:[{qty:0.3, unit:'kg', food:'aubergine'},{qty:200, unit:'g', food:'cod'}],
                description:'le cabillaud c le meilleur'
            },
            {
                id:'gratinAubergine',
                name:'gratin d\'aubergine',
                recipeType:'course',
                nbPerson:2,
                ingredients:[{qty:200, unit:'g', food:'aubergine'},{qty:0.5, unit:'l', food:'milk'}, {qty:3, unit:'', food:'egg'}],
                description:'un bon gratin'
            },
            {
                id:'crepes',
                name:'crepes',
                recipeType:'course',
                nbPerson:2,
                ingredients:[{qty:100, unit:'g', food:'flour'},{qty:20, unit:'cl', food:'milk'}, {qty:2, unit:'', food:'egg'}, {qty:1, unit:'', food:'accompagnement crepes salees'}],
                description:'creeeepes'
            },
            {
                id:'burritos',
                name:'burritos',
                recipeType:'course',
                nbPerson:2,
                ingredients:[{qty:4, unit:'', food:'crepe a burritos'},{qty:0.2, unit:'kg', food:'steack'}],
                description:'miam miam'
            },

            {
                id:'burgers2',
                name:'burgers2',
                recipeType:'course',
                nbPerson:4,
                ingredients:[{qty:50, unit:'g', food:'tomato'},{qty:4, unit:'', food:'bread'},{qty:400, unit:'g', food:'steack'}],
                description:'faire des burgers ahahah'
            },
            {
                id:'poisson2',
                name:'cabillaud four2',
                recipeType:'course',
                nbPerson:2,
                ingredients:[{qty:0.3, unit:'kg', food:'aubergine'},{qty:200, unit:'g', food:'cod'}],
                description:'le cabillaud c le meilleur'
            },
            {
                id:'gratinAubergine2',
                name:'gratin d\'aubergine2',
                recipeType:'course',
                nbPerson:2,
                ingredients:[{qty:200, unit:'g', food:'aubergines'},{qty:0.5, unit:'l', food:'milk'}, {qty:3, unit:'', food:'egg'}],
                description:'un bon gratin'
            },
            {
                id:'crepes2',
                name:'crepes2',
                recipeType:'course',
                nbPerson:2,
                ingredients:[{qty:100, unit:'g', food:'flour'},{qty:20, unit:'cl', food:'milk'}, {qty:2, unit:'', food:'egg'}, {qty:1, unit:'', food:'accompagnement crepes salees'}],
                description:'creeeepes'
            },
            {
                id:'burritos2',
                name:'burritos2',
                recipeType:'course',
                nbPerson:2,
                ingredients:[{qty:4, unit:'', food:'crepe a burritos'},{qty:0.2, unit:'kg', food:'steack'}],
                description:'miam miam'
            }
        ];


        var desserts = [
            {
                id:'moelleux',
                name:'moelleux',
                recipeType:'dessert',
                nbPerson:4,
                ingredients:[{qty:200, unit:'g', food:'chocolat noir'},{qty:125, unit:'g', food:'beurre'},{qty:4, unit:'', food:'oeuf'}],
                description:'faire des burgers ahahah'
            },
            {
                id:'crumble',
                name:'crumble',
                recipeType:'dessert',
                nbPerson:2,
                ingredients:[{qty:0.3, unit:'kg', food:'pomme'},{qty:80, unit:'g', food:'farine'},{qty:120, unit:'g', food:'beurre'},{qty:150, unit:'g', food:'sucre'}],
                description:'le cabillaud c le meilleur'
            },
            {
                id:'crepesSucrees',
                name:'crepes sucrees',
                recipeType:'dessert',
                nbPerson:2,
                ingredients:[{qty:100, unit:'g', food:'flour'},{qty:20, unit:'cl', food:'milk'}, {qty:2, unit:'', food:'egg'}, {qty:1, unit:'', food:'accompagnement crepes sucrees'}],
                description:'un bon gratin'
            }
        ];

        var breakfasts = [
            {
                id:'cereales',
                name:'cereales',
                recipeType:'breakfast',
                nbPerson:8,
                ingredients:[{qty:1, unit:'', food:'boite de cereale'}],
                description:''
            },
            {
                id:'tartines',
                name:'tartines',
                recipeType:'breakfast',
                nbPerson:2,
                ingredients:[{qty:6, unit:'', food:'tartines'}],
                description:''
            },
            {
                id:'nutella',
                name:'nutella',
                recipeType:'breakfast',
                nbPerson:10,
                ingredients:[{qty:500, unit:'g', food:'nutella'}],
                description:''
            },
            {
                id:'confiture',
                name:'confiture',
                recipeType:'breakfast',
                nbPerson:10,
                ingredients:[{qty:500, unit:'g', food:'confiture'}],
                description:''
            }
        ];

        getCoursesInMyFct = function(){
            return courses;
        };
        getStarters = function(){
            return starters;
        };
        getDesserts = function(){
            return desserts;
        };

        getBreakfasts = function(){
            return breakfasts;
        };



        addCourse = function (course) {
            //gerer IDS
            course.id=id++;
            courses.push(course);
        };

        addStarter = function (starter) {
            starter.id=id++;
            starters.push(starter);
        };


        addDessert = function (dessert) {
            dessert.id=id++;
            desserts.push(dessert);
        };

        addBreakfast = function (breakfast) {
            breakfast.id=id++;
            breakfasts.push(breakfast);
        };


        return {
            getCourses: getCoursesInMyFct,
            getStarters: getStarters,
            getDesserts: getDesserts,
            getBreakfasts: getBreakfasts,
            addCourse: addCourse,
            addStarter: addStarter,
            addDessert: addDessert,
            addBreakfast: addBreakfast

        };
    })

    /*
    attention les units et step sont en lien, les 2 tableaux doivent correspondrent
     */
    .constant('units',
        ['', 'g', 'kg', 'cl', 'l']
    )
    .constant('steps',
        [1, 25, 0.5, 5, 0.5]
    );
