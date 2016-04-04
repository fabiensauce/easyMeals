/**
 * Created by fabien on 17/03/2016.
 */


var myModule = angular.module('controllers');

myModule.controller('CalculationAlcoholCtrl', function($scope, $log, AlcoholService) {


    $scope.$emit('intoAlcohol'); //will tell to parents (global-controller.js) to modify pix

    /*

     var bieres = [
     {
     id:'kro',
     name:'kronenbourg',
     alcoholType:'biere',
     qtyCl:4,
     degre:50,
     price:10
     },
     {
     id:'1664',
     name:'1664',
     alcoholType:'biere',
     qtyCl:4,
     degre:50,
     price:10
     },

     biere : 500
     vin : 600
     fort : 2800
     */


    /*
     *****************************************************************************************
     ALCOHOL TYPE
     *****************************************************************************************

     */
    var getAlcohols = function(alcoholType){
        switch(alcoholType){
            case 'bieres' : return AlcoholService.getBieres();
            case 'vins' :  return AlcoholService.getVins();
            case 'forts' : return AlcoholService.getForts();
            default:  $scope.alcoholType = 'ERROR';
        }
    };
    $scope.alcoholType = "bieres";
    $scope.alcohols  = AlcoholService.getBieres();

    $scope.selectAlcoholType = function(alcoholType){
        $scope.alcoholType = alcoholType;
        $scope.alcohols = getAlcohols(alcoholType);
        $scope.filterQties = getFilterQties(alcoholType);
        $scope.filterQtyChosen = 70;
        updateAlcoholsWithQty();
    }


    /*
     *****************************************************************************************
     FILTERS QTY - PRICE
     *****************************************************************************************
    */

     //[{name:'pack 6', cl:150},{name:'pack 12', cl:300}, {name:'pack 24', cl:600}, {name:'70 cl', cl:70}];
    $scope.filterQties = AlcoholService.getFilterBiereQties();
    $scope.filterQtyChosen = 70;

    var getFilterQties = function(alcoholType){
        switch(alcoholType){
            case 'bieres' : return AlcoholService.getFilterBiereQties();
            case 'vins' :  return AlcoholService.getFilterVinQties();
            case 'forts' : return AlcoholService.getFilterFortQties();
            default:  $scope.alcoholType = 'ERROR';
        }
    };


    var updateAlcoholsWithQty = function(){
        var alcohols =  $scope.alcohols;
        for(var i=0; i<alcohols.length; i++){
            var alcohol = alcohols[i];
            alcohol.qtyCl = $scope.filterQtyChosen;
            alcohol.txtQty = computeTxtQty(alcohol.qtyCl);
        }
    }

    $scope.$watch('filterQtyChosen', updateAlcoholsWithQty);

    var computeTxtQty = function(qty){
        if(qty==70){
            return '70 cl';
        }
        if($scope.alcoholType == "bieres"){
            return 'pack '+qty/25+'x25cl';
        }else{
            return qty/100+' l';
        }
    };




    /*
     **********************************************************************************************
     **********************************************************************************************
     LISTE ALCOHOLS
     **********************************************************************************************
     **********************************************************************************************

     */

    $scope.displayAlcoholDetail=function(alcohol){
        return alcohol;
    }

    //LISTE ALCOHOL
    $scope.chosenAlcohols = [];



    /*
    CALCUL VERRES
     */
    $scope.nbPers = 5;
    $scope.nbGlass = 4;
    $scope.totalNbGlass = 0;
    $scope.totalAmountAlcohol = 0;
    $scope.colorGlassLeft = "green";

    var resetNbGlass = function(){
        $scope.totalNbGlass =  $scope.nbPers * $scope.nbGlass;
        updateAmountAlcohol();
        //$scope.totalAmountAlcohol = $scope.totalNbGlass * 125;
    }
    $scope.$watch('nbPers + nbGlass', resetNbGlass);

    /**
     * Dans update Amount Alcohol,
     * ajouter champs qtyTxt =" 25*12"
     * updater champ qty = qty * nbr selectionné dans radio button (6, 12 pr biere, 70, 150, 300 pr vin/fort...)
     *
     *
     */
    var updateAmountAlcohol = function(){
        $scope.totalAmountAlcohol = $scope.totalNbGlass * 125;

        var sum = $scope.totalAmountAlcohol;
        for(var i=0; i<$scope.chosenAlcohols.length; i++){
            var alcohol = $scope.chosenAlcohols[i];
            sum = sum - (alcohol.qtyCl * alcohol.degre * alcohol.nbItem);
        }
        $scope.totalAmountAlcohol = sum;
        $scope.updateDisplayNbGlassLeft();


        mergeDuplicateAlcohol();
    }
    $scope.$watch('chosenAlcohols', updateAmountAlcohol ,true);

    var mergeDuplicateAlcohol = function(){

        var listAlcohol = $scope.chosenAlcohols;

        var alcohol = {}; //{id:'fort',name:'rhum',alcoholType:'fort',qtyCl:70,degre:37,price:15,txtQty:'',nbItem:1}
        var alcohol2 = {};
        for(var i=0; i<listAlcohol.length; i++){
            alcohol = listAlcohol[i];
            if(alcohol.name != ''){
                for(var j=i+1; j<listAlcohol.length; j++){
                    alcohol2 = listAlcohol[j];
                    if(alcohol.name == alcohol2.name && alcohol.qtyCl == alcohol2.qtyCl){
                        alcohol.nbItem++;
                        alcohol2.name = '';
                    }
                }
            }
        }

        //REMOVE ingredient empty
        for(var k=listAlcohol.length-1; k>=0; k--) {
            if (listAlcohol[k].name == '') {
                listAlcohol.splice(k, 1);
            }
        }
        $scope.chosenAlcohols = listAlcohol;
    }


    $scope.displayNbItem = function(alcohol){
        if(alcohol.nbItem > 1){
            return 'x'+alcohol.nbItem;
        }else{
            return '';
        }
    }


    /*
     *****************************************************************************************
     DISPLAY GLASS LEFT
     *****************************************************************************************

     */

    $scope.nbGlassLeft = $scope.totalAmountAlcohol/125;
    $scope.colorGlassLeft = "green";
    $scope.displayIsGlassLeft = "verres restants";
    $scope.isGlassLeft = true;

    //$scope.$watch('totalAmountAlcohol', updateAAA);
    $scope.updateDisplayNbGlassLeft = function(){

        $scope.nbGlassLeft = Math.round($scope.totalAmountAlcohol/125);
        $scope.displayIsGlassLeft = " verres restants";
        $scope.isGlassLeft = true;
        if($scope.nbGlassLeft == 0){
            $scope.colorGlassLeft = "#5bc0de"; /* bluebtn or try cornflowerblue*/
        }else if($scope.nbGlassLeft > 0){
            $scope.colorGlassLeft = "#5cb85c";/* green btn*/
        }else{
            $scope.nbGlassLeft = Math.abs($scope.nbGlassLeft);
            $scope.colorGlassLeft = "#d9534f";/*red btn*/
            $scope.displayIsGlassLeft = " verres en TROP";
            $scope.isGlassLeft = false;
        }
    }

    $scope.onOverListDrop = function(){
        document.getElementById("listDrop").style.border = '2px solid #e89996';
        //document.getElementById("listDrop").style.background =  '#d9534f';
        //document.getElementById("listDrop").style.color = 'white';
    }
    $scope.onOutListDrop = function(){
        document.getElementById("listDrop").style.border = 'none';
        //document.getElementById("listDrop").style.background =  'white';
        //document.getElementById("listDrop").style.color = '#d9534f';
    }

    /*
*****************************************************************************************
    TRASH
 *****************************************************************************************

     */

    $scope.trash = [];

    var checkNbItem = function(){
        if($scope.trash.length > 0){
            var alcoholTrashed = $scope.trash[0]; //Bcause trash always empty so new element is at trash[0]
            if(alcoholTrashed.nbItem > 1){
                alcoholTrashed.nbItem--;
                $scope.chosenAlcohols.push(alcoholTrashed);
            }
            $scope.trash = [];
        }
    }

    $scope.$watch('trash', checkNbItem ,true);


    $scope.dataDropTrash = true;//fonctionne!

    $scope.onOverTrash = function(){
        document.getElementById("trashAlcohol").style.color = 'orange';
    }
    $scope.onOutTrash = function(){
        document.getElementById("trashAlcohol").style.color = '#d9534f';
    }
});
myModule.filter('orderByAlcoholType', function($log){
    var sortRecipeType = function(input){
        var recipesReordered = [];
        var arrRecipeType=['bieres','vins','forts'];//ordre filter
        var tmp = {};
        for(var i=0; i<arrRecipeType.length; i++){
            for(var j=0; j<input.length; j++){
                if(input[j].alcoholType == arrRecipeType[i]){
                    recipesReordered.push(input[j]);
                }
            }
        }
        return recipesReordered;
    };
    return sortRecipeType;
});
