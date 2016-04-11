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
                ingredients:[{qty:50, unit:'g', food:'rouleauPrintemp'},
                    {qty:4, unit:'', food:'bread'},
                    {qty:400, unit:'g', food:'courgette'}],
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
                ingredients:[{qty:10, unit:'', food:'saucisse'},
                    {qty:1, unit:'', food:'pate feuillete'},
                    {qty:3, unit:'', food:'egg'}],
                description:'feuilletes'
            }
        ];

        var courses = [
            {
                id:1, //sera un num UNIQUE
                name:'Burgers',
                pixName:'burgers.jpg',//concatener avec id
                recipeType:'course',
                nbPerson:4,
                ingredients:[{qty:50, unit:'g', food:'tomate', rayonId:6},
                    {qty:4, unit:'', food:'pain', rayonId:5},
                    {qty:400, unit:'g', food:'steack', rayonId:1}],
                description:'faire des burgers ahahah',
                descriptionOpen: false,
                origin:'Americain',
                categories:['viande', 'four', 'Facile'],
                isFavorite: false,
                isForPlanning:false,
                rating:2
            },
            {
                id:2,
                name:'Cabillaud au Four',
                pixName:'cabillaudFour.jpg',
                recipeType:'course',
                nbPerson:2,
                ingredients:[{qty:0.3, unit:'kg', food:'aubergine', rayonId:6},
                    {qty:200, unit:'g', food:'cabillaud', rayonId:2}],
                description:'le cabillaud c le meilleur',
                descriptionOpen: false,
                origin:'Francais',
                categories:['poisson', 'legume','four'],
                isFavorite: true,
                isForPlanning:true,
                rating:2
            },
            {
                id:3,
                name:'Aubergines au Four',
                pixName:'aubergineFour.jpg',
                recipeType:'course',
                nbPerson:2,
                ingredients:[{qty:200, unit:'g', food:'aubergine', rayonId:6},
                    {qty:0.5, unit:'l', food:'lait', rayonId:0},
                    {qty:3, unit:'', food:'oeuf', rayonId:3}],
                description:'un bon gratin',
                descriptionOpen: false,
                origin:'Francais',
                categories:['vegetarien', 'legume', 'four'],
                isFavorite: false,
                isForPlanning:true,
                rating:4
            },
            {
                id:4,
                name:'Crêpes',
                pixName:'crepes.jpg',
                recipeType:'course',
                nbPerson:2,
                ingredients:[{qty:100, unit:'g', food:'farine', rayonId:3},
                    {qty:20, unit:'cl', food:'lait', rayonId:0},
                    {qty:2, unit:'', food:'oeuf', rayonId:0},
                    {qty:1, unit:'', food:'accompagnement crepes salees', rayonId:0}],
                description:'creeeepes',
                descriptionOpen: false,
                origin:'Francais',
                categories:['viande', 'poêle', 'Sucré Salé', 'Facile'],
                isFavorite: false,
                isForPlanning:false,
                rating:2
            },
            {
                id:5,
                name:'Burritos',
                pixName:'burritos.jpg',
                recipeType:'course',
                nbPerson:2,
                ingredients:[{qty:4, unit:'', food:'crepe a burritos', rayonId:3},{qty:0.2, unit:'kg', food:'steack', rayonId:1}],
                description:'miam miam',
                descriptionOpen: false,
                origin:'Mexicain',
                categories:['viande', 'poêle', 'legume', 'Facile'],
                isFavorite: true,
                isForPlanning:false,
                rating:3.5
            },
            {
                id:6,
                name:'Burgers Maison',
                pixName:'burgersMaison.jpeg',
                recipeType:'course',
                nbPerson:5,
                ingredients:[ {qty:"10", unit:"", "food":"pains burgers", rayonId:5},
                            {qty:"5", unit:"", "food":"tomate", rayonId:6},
                            {qty:"100", unit:"g", "food":"fromage rapé", rayonId:7},
                            {qty:"10", unit:"", "food":"steack", rayonId:1},
                            {qty:"1", unit:"", "food":"sauce burger", rayonId:3},
                            {qty:"1", unit:"", "food":"salade", rayonId:6}],

                description:'Faire cuire les steacks hachés sans matière grasse dans une poele avec un couvercle. \nPendant ce temps, coupez les tomates en tranches fines et lavez la salade si besoin.Lorsque les steacks sont prêts, préparez les burgers:Déposez les tranches de pains burgers dans une assiète. Mettre du fromage sur les deux côtés du pain. Les faire chauffer au micro onde 30 secondes. Recouvrez les de sauce burger. Mettez le steack, 3 tranches de tomates et une feuille de salade.',
                descriptionOpen: false,
                origin:'Americain',
                categories:['viande', 'four', 'Facile'],
                isFavorite: true,
                isForPlanning:true,
                rating:5
            },

            {
                id:'19',
                name:'Lasagnes',
                pixName:'lasagne.jpg',
                recipeType:'course',
                nbPerson:3,
                ingredients: [ {"qty":"200", unit:"g", food:"sauce tomtaes", rayonId:3},
                    {"qty":"100", unit:"g", food:"fromage rapé", rayonId:7},
                    {"qty":"500", unit:"g", food:"steack", rayonId:1},
                    {"qty":"100", unit:"g", food:"pates lasagne", rayonId:3},
                    {"qty":"1", unit:"pot", food:"creme fraiche", rayonId:7}],

                description:"Faire cuire les steack hache. en parallele creme fraiche Placer dans un plat à four les steack puis creme puis couche de lasagne (pates) puis encoure 3 fois mettez au four 25min ",
                descriptionOpen: false,
                origin:'Italien',
                categories:['viande', 'four', 'gratin'],
                isFavorite: false,
                isForPlanning:true,
                rating:4
            },



            {
                id:'20',
                name:'Escalopes Viennoises',
                pixName:'escalopeViennoise.jpg',
                recipeType:'course',
                nbPerson:2,
                ingredients: [ {qty:"300", unit:"g", food:"escalope dinde", rayonId:1},
                    {qty:"100", unit:"g", food:"chapelure", rayonId:3},
                    {qty:"4", unit:"g", food:"oeuf", rayonId:3},
                    {qty:"200", unit:"g", food:"farine", rayonId:3},
                    {qty:"", unit:"", food:"epices", rayonId:3}],
                description:" Preparez 3 plats, un mettez de la farine, l'autre des oeufs mélangez comme pour faire une omelette et assaisonées d'épices, le troisième avec de la chapelure. Trempez les escalade dans la farine puis oeufs puis chapelure et mettez à la poelle avec beaucoup de matière grasse  :p ",
                descriptionOpen:false,
                origin:'Italien',
                categories:['viande', 'poêle'],
                isFavorite: true,
                isForPlanning:false,
                rating:5
            },
            {
                id:'21',
                name:'Coeur Casselois',
                pixName:'coeurCasselois.jpg',
                recipeType:'course',
                nbPerson:4,
                ingredients: [ {qty:"1", unit:"", food:"pate feuillté", rayonId:3},
                    {qty:"400", unit:"g", food:"chaire à saucisse", rayonId:1},
                    {qty:"4", unit:"", food:"pomme", rayonId:6},
                    {qty:"", unit:"", food:"sucre", rayonId:3},
                    {qty:"", unit:"", food:"thym", rayonId:3},
                    {qty:"", unit:"", food:"cumin", rayonId:3}],
                description:" 1 - Faites une bonne compote Je met un fond d'eau et d'huile d'olive pour pas que ça crame , on y ajoute les pommes coupées en petit morceaux, on touille régulièrement et vers la fin de la cuisson on ajoute une pincée de cumin et du sucre si besoin. 2 - Préparez la viande à feu vif, sans ajout de matière grasse (vous pouvez même virer le gras au milieu de cuisson - avant d'ajouter les épices). Ajoutez y les épices que vous voulez, ça dépends des gout je met du thym ou des herbes de provence mais c'est assez libre. (La viande est parfaite quand elle commence à roussir, une des variantes est de mettre le sucre dans la viande - environ une cuillère à soupe - pour la faire caraméliser) 3 - Cuisson ! Étalez la pâte, faites une couche de viande et mettez la compote par dessus, refermez la pâte autour pour que ça tienne bien. Et enfournez 20/30 minutes en fonction de la pâte et du four! Dégustez émoticône grin Si vous voulez que le plat ressemble à ce que l'on voit dans les livres de cuisine, il suffit de faire une dorure (50% jaune d'oeuf, 50% eau) et de l'étaler sur la pâte feuilleté pour un effet doré.",
                descriptionOpen:false,
                origin:'Francais',
                categories:['viande', 'four', 'sucré salé', 'Legume'],
                isFavorite: false,
                isForPlanning:false,
                rating:3
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
        var cocktails = [
            {
                id:'0',
                name:'Sex & the beach',
                recipeType:'cocktail',
                nbPerson:5,
                ingredients:[{qty:70, unit:'cl', food:'Vodka'}, {qty:1, unit:'l', food:'jus d\'orange'}, {qty:1, unit:'l', food:'jus d\'ananas'},{qty:10, unit:'cl', food:'sirop de grenadine'}],
                description:'Verser le sirop au fond d\'un grand recipient. Verser ensuite simultanément la vodka ainsi que les deux jus. Servir avec glacon.',

                pixName:'sexOnTheBeach.jpg',
            },
            {
                id:'1',
                name:'Mojito',
                recipeType:'cocktail',
                nbPerson:5,
                ingredients:[{qty:70, unit:'cl', food:'Rhum'}, {qty:1, unit:'l', food:'limonade'}, {qty:200, unit:'g', food:'citron vert'}],
                description:'',

                pixName:'mojito.jpeg',
            }
        ];

        getSingleRecipe = function(recipeType, recipeId){
            for(var i=0; i<courses.length; i++){
                if(courses[i].id == recipeId){
                    return courses[i];
                }
            }
            return null;
        }
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
        getCocktails = function(){
            return cocktails;
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
        addCocktail = function (cocktail) {
            cocktail.id=id++;
            cocktails.push(cocktail);
        };


        return {
            getCourses: getCoursesInMyFct,
            getStarters: getStarters,
            getDesserts: getDesserts,
            getBreakfasts: getBreakfasts,
            getCocktails: getCocktails,
            addCourse: addCourse,
            addStarter: addStarter,
            addDessert: addDessert,
            addBreakfast: addBreakfast,
            addCocktail: addCocktail,
            getSingleRecipe: getSingleRecipe

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