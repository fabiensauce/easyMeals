/**
 * Created by fabien on 13/03/2016.
 */
var myModule = angular.module('controllers');



myModule.controller('SingleRecipeCtrl', function($scope, $routeParams, $location, $window,  $log, RecipeService) {

    $scope.bonjour = "ahahah";


     $scope.$watch(function(){
            return $window.width;
        }, function(value) {
            $log.debug("ALLLRRR --------------------- : "+value);
        });

    var recipeType = $routeParams.recipeType;
    var recipeId = $routeParams.id;
    $scope.recipeType = recipeType;
    $scope.recipeId = recipeId;
    $scope.recipe = RecipeService.getSingleRecipe(recipeType, recipeId);
    $scope.showRecipe = $scope.recipe != null;

});


myModule.controller('RecipeCtrl', function($scope, $routeParams, $location, $window,  $log, RecipeService) {

    $scope.$emit('intoRecipe'); //will tell to parents (global-controller.js) to modify pix


    var recipeType = $routeParams.recipeType;
    var recipeSelection = $routeParams.selection;
    $scope.recipeType = recipeType;

    var getRecipes = function(recipeType){
        switch(recipeType){
            case 'starter' : return RecipeService.getStarters();
            case 'course' :  return RecipeService.getCourses();
            case 'dessert' : return RecipeService.getDesserts();
            case 'breakfast' : return RecipeService.getBreakfasts();
            case 'cocktail' : return RecipeService.getCocktails();
            default:  $scope.recipeType = 'ERROR';
        }
    }
    $scope.recipes = getRecipes(recipeType);


    $scope.displayRecipeType = function(){
        switch($scope.recipeType){
            case 'starter' : return 'Entrées';
            case 'course' :  return 'Plats';
            case 'dessert' : return 'Desserts';
            case 'breakfast' : return 'Déjeuners - Goûters';
            case 'cocktail' : return 'Cocktails';
        }
    }
    $scope.displayCreationRecipeType = function(){
        switch($scope.recipeType){
            case 'starter' : return 'Créer une nouvelle Entrée';
            case 'course' :  return 'Créer un nouveau Plat';
            case 'dessert' : return 'Créer un nouveau Dessert';
            case 'breakfast' : return 'Créer un nouveau Dej/Goûter';
            case 'cocktail' : return 'Créer un nouveau Cocktail';
        }
    }
   // $scope.courses = RecipeService.getCourses();


    $scope.getIngrUnitDisplay = function(ingredientUnit){
        if(ingredientUnit != ''){
            return (ingredientUnit + ' of');
        }
        else {

            return ' piece(s) of';
        }
    }

    $scope.toggleDescOpen = function(recipe){
        recipe.descriptionOpen = !recipe.descriptionOpen;
    }

    $scope.showInList = true;
    $scope.showInBlock = false;

    $scope.showInListFct = function(){
        $scope.showInList = true;
        $scope.showInBlock = false;
    }
    $scope.showInBlockFct = function(){
        $scope.showInList = false;
        $scope.showInBlock = true;

    }

    $scope.toggleFavorite = function(recipe, event){
        event.stopPropagation();
        recipe.favoriteRecipe = !recipe.favoriteRecipe;
        updateRecipesLists();
        updateFilter();
    }
    $scope.toggleforPlanning = function(recipe, event){
        event.stopPropagation();
        recipe.forPlanning = !recipe.forPlanning;
        updateRecipesLists();
        updateFilter();
    }
    $scope.openRecipeNewWindow = function(id) {
        event.stopPropagation();
        $window.open('http://localhost:9000/#/singleRecipe/'+$scope.recipeType+'/'+id);
    };
    /*$scope.reloadRoute = function() {
        alert("bjr");
        $route.reload();
        $location.search( 'viande', null );
    }*/

    $scope.listOrderBy = [{name:'nom', value:'name'}, {name:'note', value:'-rating'}]; /*- permet dinverser lordre*/
    $scope.recipeOrderBy = 'name';

    /************************* FILTRE *********************************/
    $scope.filterSearch = {
        myLists:[ {id:'myFavorite', name:'Mes recettes préférées'}, {id:'myPlanning', name:'Mes recettes planning'}], /*{id:'myMeal', name:'Mes plats'},*/
        categories:['Viande','Poisson','Four', 'GratinDauphinois', 'aussiCa', 'sucre sale', 'et plein dautre', 'ahah', 'faya', 'fiest'],
        origins:['Francais', 'Italien', 'Americain', 'Mexicain']//, 'Thai', 'Indien', 'Marocain']
    };
    $scope.filterMySelection = {
        myLists:[],
        ingredients:[],
        categories:[],
        origins:[]
    };

    $scope.isRecipeFavorite = function(myListId){
        return myListId == 'myFavorite';
    }
    $scope.isRecipePlanning = function(myListId){
        return myListId == 'myPlanning';

    }
    $scope.separateMyList = function(){
        return $scope.filterMySelection.myLists.length > 0 &&
            ($scope.filterMySelection.ingredients.length > 0 || $scope.filterMySelection.categories.length > 0 || $scope.filterMySelection.origins.length > 0);
    }
    $scope.separateIngredient = function(){
        return $scope.filterMySelection.ingredients.length > 0 &&
            ($scope.filterMySelection.categories.length > 0 || $scope.filterMySelection.origins.length > 0);
    }
    $scope.separateCategorie = function(){
        return $scope.filterMySelection.categories.length > 0 && $scope.filterMySelection.origins.length > 0;
    }

    $scope.emptyFilterSelection = function(){
        var filterMySelection = $scope.filterMySelection;
        var filterSearch = $scope.filterSearch;
        for(var i=0; i<filterMySelection.myLists.length; i++){
            filterSearch.myLists.push(filterMySelection.myLists[i]);
        }
        for(var i=0; i<filterMySelection.categories.length; i++){
            filterSearch.categories.push(filterMySelection.categories[i]);
        }
        for(var i=0; i<filterMySelection.origins.length; i++){
            filterSearch.origins.push(filterMySelection.origins[i]);
        }

        filterMySelection.myLists = [];
        filterMySelection.ingredients = [];
        filterMySelection.categories = [];
        filterMySelection.origins = [];
    }

    /***************************************************************************************************
            FONCTION pour display FILTER
     **************************************************************************************************/

    $scope.removeMyListFromSelection = function(myList){
        $scope.filterSearch.myLists.push(myList);
        var index = $scope.filterMySelection.myLists.indexOf(myList); //fonctionne aussi tres bien
        $scope.filterMySelection.myLists.splice(index, 1);
    }
    $scope.removeIngredientFromSelection = function(ingredientName){
        var index = $scope.filterMySelection.ingredients.indexOf(ingredientName); //fonctionne aussi tres bien
        $scope.filterMySelection.ingredients.splice(index, 1);
    }
    $scope.removeCategoryFromSelection = function(category){
        $scope.filterSearch.categories.push(category);
        var index = $scope.filterMySelection.categories.indexOf(category); //fonctionne aussi tres bien
        $scope.filterMySelection.categories.splice(index, 1);
    }
    $scope.removeOriginFromSelection = function(origin){
        $scope.filterSearch.origins.push(origin);
        var index = $scope.filterMySelection.origins.indexOf(origin); //fonctionne aussi tres bien
        $scope.filterMySelection.origins.splice(index, 1);
    }



    $scope.moveMyListToSelection = function(myList){
        $scope.filterMySelection.myLists.push(myList);
        var index = $scope.filterSearch.myLists.indexOf(myList); //fonctionne aussi tres bien
        $scope.filterSearch.myLists.splice(index, 1);
    }
    $scope.moveIngredientToSelection = function(ingredientName){
        if(ingredientName != undefined ){
            $scope.filterMySelection.ingredients.push(ingredientName);
            $scope.ingredientName = '';
        }
    }
    $scope.moveCategoryToSelection = function(category){
        $scope.filterMySelection.categories.push(category);
        var index =  $scope.filterSearch.categories.indexOf(category); //fonctionne aussi tres bien
        $scope.filterSearch.categories.splice(index, 1);
    }
    $scope.moveOriginToSelection = function(origin){
        $scope.filterMySelection.origins.push(origin);
        var index =  $scope.filterSearch.origins.indexOf(origin); //fonctionne aussi tres bien
        $scope.filterSearch.origins.splice(index, 1);
    }


    var directParamSelection = function(recipeSelection){

        if(recipeSelection != undefined ){
            for(var i=0; i<$scope.filterSearch.myLists.length; i++){
                if($scope.filterSearch.myLists[i].id == recipeSelection){
                    $scope.moveMyListToSelection($scope.filterSearch.myLists[i]);
                }
            }

            for(var i=0; i<$scope.filterSearch.categories.length; i++){
                if($scope.filterSearch.categories[i].toUpperCase() == recipeSelection.toUpperCase()){
                    $scope.moveCategoryToSelection($scope.filterSearch.categories[i]);
                }
            }
        }


    }

    directParamSelection(recipeSelection);



    /***************************************************************************************************
     *                                                           fin  FONCTION pour display FILTER
     **************************************************************************************************/




    /***************************************************************************************************
     MAJ FILTER
     **************************************************************************************************/

    /* est appele la premiere fois + quand toggleFavorite() & toggleforPlanning()*/
    var updateRecipesLists = function() {

        $scope.recipesFavorite = [];
        $scope.recipesPlanning = [];
        $scope.recipesMine = [];//initilisee so far

        var recipe = {};
        for (var i = 0; i < $scope.recipes.length; i++) {
            recipe = $scope.recipes[i];
            if(recipe.favoriteRecipe){
                $scope.recipesFavorite.push(recipe);
            }
            if(recipe.forPlanning){
                $scope.recipesPlanning.push(recipe);
            }
        }
    }
    updateRecipesLists();




    /*var updateFilter = function(){
        var recipesTmp = [];
        var recipesFavorite = $scope.recipesFavorite;
        var recipesPlanning = $scope.recipesPlanning;
        var filterMySelection = $scope.filterMySelection;

        for(var i=0; i<filterMySelection.myLists.length; i++){
            if(filterMySelection.myLists[i].id == 'myFavorite'){
                recipesTmp = concatArr1IntoArr2(recipesFavorite, recipesTmp)
            }
            if(filterMySelection.myLists[i].id == 'myPlanning'){
                recipesTmp = concatArr1IntoArr2(recipesPlanning, recipesTmp) //recipesTmp = recipesTmp.concat(recipesPlanning);//ne fonctionne pas car autorise pas les doublon...
            }
        }


        $scope.recipesTmp = recipesTmp;
        if(filterMySelection.myLists.length > 0){
            $scope.recipesToDisplay = $scope.recipesTmp;
        }
        else{
            $scope.recipesToDisplay = $scope.recipes;
        }
    } */
    var updateFilter = function(){
        var recipes = $scope.recipes;
        var recipesNew = [];
        var filterMySelection = $scope.filterMySelection;

        //si aucun filtre na ete selectionné on met la full list recipes!
        if(filterMySelection.myLists.length == 0 &&
            filterMySelection.ingredients.length == 0 &&
            filterMySelection.categories.length == 0 &&
            filterMySelection.origins.length == 0){

            recipesNew = recipes;
        }

        //sinon on va remplir la list de recette (oupah si rien ne correspond aux criteres)
        else {

            /******************************MY LIST *****************************************************************/
            var isMyFavoriteIntoSelection = false;
            var isPlanningIntoSelection = false;
            for(var i=0; i<filterMySelection.myLists.length; i++){
                if(filterMySelection.myLists[i].id == 'myFavorite'){
                    isMyFavoriteIntoSelection = true;
                }
                if(filterMySelection.myLists[i].id == 'myPlanning'){
                    isPlanningIntoSelection = true; }
            }

            var isThereAfilterMyList = isMyFavoriteIntoSelection || isPlanningIntoSelection ;
            if(isThereAfilterMyList){ //if there is at least one filter into selection concerning myList
                for(var k=0; k<recipes.length; k++){
                    //hence we check for each item of the recipes if it can be selected ! (and added to the new recipes)
                    if((isMyFavoriteIntoSelection && recipes[k].favoriteRecipe) || (isPlanningIntoSelection && recipes[k].forPlanning)){
                        recipesNew.push(recipes[k]);
                    }
                }
            }
            /****************************** ORIGIN ******************************************************************/
            var isThereAfilterOrigin = filterMySelection.origins.length > 0;
            if(isThereAfilterOrigin){
                if(isThereAfilterMyList){//si il y un filtre (au moins) myList dans selection :
                    // recipesNew a ete rempli donc on fait l'intersection avec origin
                    for(var k=recipesNew.length-1; k>=0; k--) {
                        //REMOVE //si l elem ne repond pas au critere selection avec origin -> out!
                        if(filterMySelection.origins.indexOf(recipesNew[k].origin) == -1){//si origins contient pas recipesNew[k].origin (sinon renvoi pos. index > 0)
                            recipesNew.splice(k,1);
                        }
                    }
                }else{//si il n'y a pas de filtre myList dans selection, alr on construit recipesNew avec origin
                    for(var k=0; k<recipes.length; k++){
                        //hence we check for each item of the recipes if it can be selected ! (and added to the new recipes)
                        if(filterMySelection.origins.indexOf(recipes[k].origin) != -1){//si origins contient pas recipesNew[k].origin (sinon renvoi pos. index > 0)
                            recipesNew.push(recipes[k]);
                        }
                    }
                }
            }
            /****************************** CATEGORIE ***************************************************************/
            var isThereAfilterCategory = filterMySelection.categories.length > 0;
            if(isThereAfilterCategory){
                if(isThereAfilterMyList || isThereAfilterOrigin){//si il y un filtre (au moins) myList OU origin dans selection :
                    // recipesNew a ete rempli donc on fait l'intersection avec category
                    for(var k=recipesNew.length-1; k>=0; k--) {
                        //REMOVE //si l elem ne repond pas au critere selection avec category -> out!
                        if(!intersectExistStricte(filterMySelection.categories, recipesNew[k].categories)){
                            recipesNew.splice(k,1);
                        }

                    }
                }else{//si il n'y a pas de filtre myList NI origin dans selection, alr on construit recipesNew avec category
                    for(var k=0; k<recipes.length; k++){
                        //hence we check for each item of the recipes if it can be selected ! (and added to the new recipes)
                        if(intersectExistStricte(filterMySelection.categories, recipes[k].categories)){
                            recipesNew.push(recipes[k]);
                        }
                    }
                }
            }


            /****************************** INGREDIENTS ***************************************************************/
            var isThereAfilterIngredient = filterMySelection.ingredients.length > 0;
            if(isThereAfilterIngredient){
                if(isThereAfilterMyList || isThereAfilterOrigin || isThereAfilterCategory){//si il y un filtre (au moins) myList OU origin OU category dans selection :
                    // recipesNew a ete rempli donc on fait l'intersection avec ingredients
                    for(var k=recipesNew.length-1; k>=0; k--) {
                        //REMOVE //si l elem ne repond pas au critere selection avec ingredients -> out!
                        if(!intersectIngrExistStricte(filterMySelection.ingredients, recipesNew[k].ingredients)){
                            recipesNew.splice(k,1);
                        }

                    }
                }else{//si il n'y a pas de filtre myList NI origin NI category dans selection, alr on construit recipesNew avec ingredients
                    for(var k=0; k<recipes.length; k++){
                        //hence we check for each item of the recipes if it can be selected ! (and added to the new recipes)
                        if(intersectIngrExistStricte(filterMySelection.ingredients, recipes[k].ingredients)){
                            recipesNew.push(recipes[k]);
                        }
                    }
                }
            }





            /*  $scope.filterMySelection = {
                  myLists:[ {id:'myFavorite', name:'Mes recettes préférées'}, {id:'myPlanning', name:'Mes recettes planning'}],
                  ingredients:['steack','curry'],
                  categories:[{id:'viande', name:'Viande'}, {id:'poisson', name:'Poisson'}, {id:'four', name:'Four'}],
                  origins:['Francais', 'Italien', 'Thai', 'Indien', 'Marocain']
              };*/

        }

        $scope.recipesToDisplay = recipesNew;

    }
    $scope.$watch('filterMySelection', updateFilter, true);

    var intersectExistUnion = function(arr1, arr2){//on veut ici au moins 1 elem de arr1 contenut ds arr2
        var intersect = false;
        for(var i=0; i<arr1.length; i++){
            for(var j=0; j<arr2.length; j++){
                if(arr1[i].toUpperCase() === arr2[j].toUpperCase()){
                    intersect = true;
                }
            }
        }
        return intersect;
    }
    var intersectExistStricte = function(arr1, arr2){//on veut ici que TOUS les elem de arr1 soient contenu ds arr2
        var intersectFinal = true;
        var intersect = false;
        for(var i=0; i<arr1.length; i++){
            intersect = false;
            for(var j=0; j<arr2.length; j++){
                if(arr1[i].toUpperCase() === arr2[j].toUpperCase()){
                    intersect = true;
                }
            }
            if(!intersect){
                intersectFinal = false;
            }
        }
        return intersectFinal;
    }
    var intersectIngrExistStricte = function(arr1, arr2){//on veut ici que TOUS les elem de arr1 soient contenu ds arr2
        //arr1 list string - arr2 list of {qty:0.3, unit:'kg', food:'aubergine', rayonId:6}
        var intersectFinal = true;
        var intersect = false;
        for(var i=0; i<arr1.length; i++){
            intersect = false;
            for(var j=0; j<arr2.length; j++){
                if(arr1[i].toUpperCase() === arr2[j].food.toUpperCase()){
                    intersect = true;
                }
            }
            if(!intersect){
                intersectFinal = false;
            }
        }
        return intersectFinal;
    }
    /*
    var concatArr1IntoArr2 = function(arr1, arr2){
        for(var k= 0; k<arr1.length; k++){
            if(arr2.indexOf(arr1[k]) == -1){//arr2 contient pas arr1[k] (sinon renvoi pos. index > 0)
                arr2.push(arr1[k]);
            }
        }
        return arr2;
    }
    */


});