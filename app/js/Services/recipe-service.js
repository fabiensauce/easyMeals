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
                id:'burgers', //sera un num UNIQUE
                name:'Burgers',
                pixName:'burgers.jpg',//concatener avec id
                recipeType:'course',
                nbPerson:4,
                ingredients:[{qty:50, unit:'g', food:'tomate', rayonId:6},{qty:4, unit:'', food:'pain', rayonId:5},{qty:400, unit:'g', food:'steack', rayonId:1}],
                description:'faire des burgers ahahah',
                descriptionOpen: false
            },
            {
                id:'poisson',
                name:'Cabillaud au Four',
                pixName:'cabillaudFour.jpg',
                recipeType:'course',
                nbPerson:2,
                ingredients:[{qty:0.3, unit:'kg', food:'aubergine', rayonId:6},{qty:200, unit:'g', food:'cabillaud', rayonId:2}],
                description:'le cabillaud c le meilleur',
                descriptionOpen: true
            },
            {
                id:'gratinAubergine',
                name:'Aubergines au Four',
                pixName:'aubergineFour.jpg',
                recipeType:'course',
                nbPerson:2,
                ingredients:[{qty:200, unit:'g', food:'aubergine', rayonId:6},{qty:0.5, unit:'l', food:'milk', rayonId:0}, {qty:3, unit:'', food:'egg', rayonId:3}],
                description:'un bon gratin',
                descriptionOpen: false
            },
            {
                id:'crepes',
                name:'Crêpes',
                pixName:'crepes.jpg',
                recipeType:'course',
                nbPerson:2,
                ingredients:[{qty:100, unit:'g', food:'flour', rayonId:3},{qty:20, unit:'cl', food:'milk', rayonId:0}, {qty:2, unit:'', food:'egg', rayonId:0}, {qty:1, unit:'', food:'accompagnement crepes salees et labalalaaabaalalalalaalalalalalabalkbalalalbalbalbalbaalblbalzlz', rayonId:0}],
                description:'creeeepes',
                descriptionOpen: false
            },
            {
                id:'burritos',
                name:'Burritos',
                pixName:'burritos.jpg',
                recipeType:'course',
                nbPerson:2,
                ingredients:[{qty:4, unit:'', food:'crepe a burritos', rayonId:0},{qty:0.2, unit:'kg', food:'steack', rayonId:1}],
                description:'miam miam',
                descriptionOpen: false
            },




            {
                id:'18',
                name:'Burgers Maison',
                pixName:'burgersMaison.jpeg',
                recipeType:'course',
                nbPerson:5,
                ingredients:[ {qty:"10", unit:"", "food":"pains burgers", rayonId:0},
                            {qty:"5", unit:"", "food":"tomtaes", rayonId:0},
                            {qty:"100", unit:"g", "food":"fromage rapé", rayonId:0},
                            {qty:"10", unit:"", "food":"steaks hachés", rayonId:0},
                            {qty:"1", unit:"", "food":"sauce burger", rayonId:0},
                            {qty:"1", unit:"", "food":"salade", rayonId:0}],

                description:'Faire cuire les steaks hachés sans matière grasse dans une poele avec un couvercle. \nPendant ce temps, coupez les tomates en tranches fines et lavez la salade si besoin.Lorsque les steaks sont prêts, préparez les burgers:Déposez les tranches de pains burgers dans une assiète. Mettre du fromage sur les deux côtés du pain. Les faire chauffer au micro onde 30 secondes. Recouvrez les de sauce burger. Mettez le steak, 3 tranches de tomates et une feuille de salade.',
                descriptionOpen: false
            },

            {
                id:'19',
                name:'Lasagnes',
                pixName:'lasagne.jpg',
                recipeType:'course',
                nbPerson:3,
                ingredients: [ {"qty":"200", unit:"g", food:"sauce tomtaes", rayonId:0},
                    {"qty":"100", unit:"g", food:"fromage rapé", rayonId:0},
                    {"qty":"500", unit:"g", food:"steaks hachés", rayonId:0},
                    {"qty":"100", unit:"g", food:"pates lasagne", rayonId:0},
                    {"qty":"1", unit:"pot", food:"creme fraiche", rayonId:0}],

                description:"Faire cuire les steak hache. en parallele creme fraiche Placer dans un plat à four les steak puis creme puis couche de lasagne (pates) puis encoure 3 fois mettez au four 25min ",
                descriptionOpen: true
            },



            {
                id:'20',
                name:'Escalopes Viennoises',
                pixName:'escalopeViennoise.jpg',
                recipeType:'course',
                nbPerson:2,
                ingredients: [ {qty:"300", unit:"g", food:"escalope dinde", rayonId:0},
                    {qty:"100", unit:"g", food:"chapelure", rayonId:0},
                    {qty:"4", unit:"g", food:"oeufs", rayonId:0},
                    {qty:"200", unit:"g", food:"farine", rayonId:0},
                    {qty:"", unit:"", food:"epices", rayonId:0}],
                description:" Preparez 3 plats, un mettez de la farine, l'autre des oeufs mélangez comme pour faire une omelette et assaisonées d'épices, le troisième avec de la chapelure. Trempez les escalade dans la farine puis oeufs puis chapelure et mettez à la poelle avec beaucoup de matière grasse  :p ",
                descriptionOpen:false,
            },
            {
                id:'21',
                name:'Coeur Casselois',
                pixName:'coeurCasselois.jpg',
                recipeType:'course',
                nbPerson:4,
                ingredients: [ {qty:"1", unit:"", food:"pate feuillté", rayonId:0},
                    {qty:"400", unit:"g", food:"chaire à saucisse", rayonId:0},
                    {qty:"4", unit:"", food:"pomme", rayonId:0},
                    {qty:"", unit:"", food:"sucre", rayonId:0},
                    {qty:"", unit:"", food:"thym", rayonId:0},
                    {qty:"", unit:"", food:"cumin", rayonId:0}],
                description:" 1 - Faites une bonne compote Je met un fond d'eau et d'huile d'olive pour pas que ça crame , on y ajoute les pommes coupées en petit morceaux, on touille régulièrement et vers la fin de la cuisson on ajoute une pincée de cumin et du sucre si besoin. 2 - Préparez la viande à feu vif, sans ajout de matière grasse (vous pouvez même virer le gras au milieu de cuisson - avant d'ajouter les épices). Ajoutez y les épices que vous voulez, ça dépends des gout je met du thym ou des herbes de provence mais c'est assez libre. (La viande est parfaite quand elle commence à roussir, une des variantes est de mettre le sucre dans la viande - environ une cuillère à soupe - pour la faire caraméliser) 3 - Cuisson ! Étalez la pâte, faites une couche de viande et mettez la compote par dessus, refermez la pâte autour pour que ça tienne bien. Et enfournez 20/30 minutes en fonction de la pâte et du four! Dégustez émoticône grin Si vous voulez que le plat ressemble à ce que l'on voit dans les livres de cuisine, il suffit de faire une dorure (50% jaune d'oeuf, 50% eau) et de l'étaler sur la pâte feuilleté pour un effet doré.",
        descriptionOpen:false,
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
    )

    .constant('rayonMagasin', [
        'Fruit & Legumes',
        'Boucherie',
        'Poissonnerie',
        'Epicerie',
        'Boites',
        'Surgeles',
        'Petit dejeune',
        'Autres'
    ]);