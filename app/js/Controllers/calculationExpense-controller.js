/**
 * Created by fabien on 17/03/2016.
 */

var myModule = angular.module('controllers');

myModule.controller('CalculationExpenseCtrl', function($scope, $log) {

    $scope.bonjour = "Calculez vos depenses";
    $scope.nbPers = 4;
    $scop.bonjour = "bonjour";

    //$scope.persons = ['person1', 'person2', 'person3', 'person4'];
    $scope.persons = [{id:0, name:'fab'}, {id:1, name:'math'}, {id:2, name:'eddy'}, {id:3, name:'carine'}];

    $scope.updatePersons = function(){
        //$scope.persons = [];
        if($scope.nbPers > $scope.persons.length){//on ajoute des elemts
            for(var i=$scope.persons.length; i<$scope.nbPers; i++){
                var obj = {id:i, name:'person'+i};
                $scope.persons.push(obj);
                for(var k=0; k<$scope.rows.length; k++){
                    var isChecked = $scope.rows[k].checkedAll;
                    var objCheck = {id:i, bool:isChecked};
                    $scope.rows[k].listChecked.push(objCheck);
                }
            }
        }else{//on doit supprimer
            for(var k=0; k<$scope.rows.length; k++){
                $scope.rows[k].listChecked.splice($scope.nbPers, ($scope.persons.length-$scope.nbPers));
            }
            $scope.persons.splice($scope.nbPers, ($scope.persons.length-$scope.nbPers)); //le 1 indique combien d'element on remove a partir de index
        }

        $log.debug('BONJOUUUUUUR');
    };

    $scope.aPersonColumnChecked = function(row){//a person has been (un)checked
        var checkAll = true;
        for(var i=0; i<row.listChecked.length; i++){
            if(!row.listChecked[i].bool){
                checkAll = false;
            }
        }
        row.checkedAll = checkAll;
    };
    $scope.aAllChecked = function(row){//'all' has been (un)checked
        for(var i=0; i<row.listChecked.length; i++){
            row.listChecked[i].bool = row.checkedAll;
        }
    };


    $scope.toggleCheckList = function(isChecked){
        isChecked.bool = !isChecked.bool ;
    };
    $scope.toggleAll = function(row){
        row.checkedAll = !row.checkedAll;
    };


    var updateRows = function(){
        creationTabExpense();
        creationTabCouple();

    };
    $scope.$watch('rows', updateRows, true);
    // $scope.$watch('filterQtyChosen', updateAlcoholsWithQty);

    $scope.addRowExpense = function(){
        var numId = $scope.idRow++;
        var listCheck = [];
        for(var i=0; i<$scope.persons.length; i++){
            listCheck.push({id:i, bool:false});
        }
        var row = {id:numId, buyerId:0, price:0,listChecked:listCheck, checkedAll:false, description:''}
        $scope.rows.push(row);
    };
    $scope.deleteRowExpense = function(row){
        var index = $scope.rows.indexOf(row); //fonctionne aussi tres bien
        $scope.rows.splice(index, 1);
    };
    $scope.idRow = 3; //permet d'avoir un id unique pour chaque row qui s'incremente dans $scope.addRowExpense()
                      // (autrement possible pb lors de suppression de row puis ajout...
    $scope.rows = [
        {
            id:0,
            buyerId:0,
            price:30,
            listChecked:[{id:0, bool:true}, {id:1, bool:false}, {id:2, bool:false}, {id:3, bool:true}],
            checkedAll:false,
            description:'pour les courses'
        },
        {
            id:1,
            buyerId:0,
            price:15,
            listChecked:[{id:0, bool:false}, {id:1, bool:true}, {id:2, bool:true}, {id:3, bool:true}],
            checkedAll:false,
            description:'bonbons'
        },
        {
            id:2,
            buyerId:0,
            price:40,
            listChecked:[{id:0, bool:true}, {id:1, bool:true}, {id:2, bool:true}, {id:3, bool:true}],
            checkedAll:true,
            description:'bonbons2'
        }
    ];


    /*******************************************************************************************************************************
    /*******************************************************************************************************************************
    /*******************************************************************************************************************************
     * CALCULATION OF TAB
    /*******************************************************************************************************************************
    /*******************************************************************************************************************************
    /*******************************************************************************************************************************
     */

    /*
    * Explication calcul :
    * On cree tout dabord un TAB_EXPENSE avec taille egale aux nombre de personnes
    * il contiendra la valeur que chaque personne a payé (nb positif) ou doit rembourser (nb negatif)
    *
    * On cree ensuite un TAB_COUPLE qui est un array de triplet(triplet de 3 valeurs : QUI doit COMBIEN à QUI)
    *
    *
     */

    $scope.tabExpense = [];
    var creationTabExpense = function(){
        $scope.tabExpense = [];
        var tabExpense = $scope.tabExpense;
        for(var i=0; i<$scope.persons.length; i++){
            tabExpense.push(0);
        }

        for(var i=0; i<$scope.rows.length; i++){
            var row = $scope.rows[i];


            //value du select = 'id-name' mais name disparait avec parseInt
            var idBuyer = row.buyerId;
            var amountBuyerPayed = row.price;

            // on compte combien de personne sont concernees par le payement
            var nbChecked = 0;
            var buyerPaidForHimself = false;
            for(var j=0; j<row.listChecked.length; j++){
                if(row.listChecked[j].bool){
                    nbChecked++;
                    if(row.listChecked[j].id == idBuyer){//si celui qui a payé est coché
                        buyerPaidForHimself = true;
                    }
                }
            }
            if(nbChecked > 0){
                var amountPerson = (amountBuyerPayed/nbChecked); //.toFixed(1); //prix par personne
                var positionBuyer=idBuyer;
                //est ce que le buyer a payer pour lui meme?
                if (buyerPaidForHimself){
                    amountBuyerPayed -= amountPerson; //alors on lui soustrait sa part
                }

                tabExpense[positionBuyer] += amountBuyerPayed;
                for(var k=0; k<row.listChecked.length; k++){
                    //si ce nest pas le buyer && si la pers est cochee on soustrait
                    if(row.listChecked[k].id != idBuyer && row.listChecked[k].bool){
                        tabExpense[k] -= amountPerson;
                    }

                }


            }

        }
        $scope.tabExpense = tabExpense;
    };




    $scope.tabCouple = [];
    var creationTabCouple = function(){
        $scope.tabCouple = [];
        var tabCouple = $scope.tabCouple;
        var tabExpense = $scope.tabExpense;
        var indexMax = findIndexMax(tabExpense);
        var indexMin = findIndexMin(tabExpense);
        var isBiggestPositive = true;
        var amount = 0;
        while(tabExpense[indexMax] > 0){
            $log.debug('tabExpense : '+tabExpense+ '  -  tabCouple : '+tabCouple);
            isBiggestPositive = tabExpense[indexMax] >= Math.abs(tabExpense[indexMin]);

            if(!isBiggestPositive){
                amount = tabExpense[indexMax];
                tabExpense[indexMin] += amount;
                tabExpense[indexMax] = 0;
            }else{
                amount = tabExpense[indexMin];
                tabExpense[indexMax] += amount; // tabExpense[indexMin] est < 0
                tabExpense[indexMin] = 0;
            }

            tabCouple.push({debtGuy:$scope.persons[indexMin], amount:Math.abs(amount.toFixed(0)), benefitGuy:$scope.persons[indexMax]});
            indexMax = findIndexMax(tabExpense);
            indexMin = findIndexMin(tabExpense);
        }

        $log.debug('tabExpense : '+tabExpense+ '  -  tabCouple : '+tabCouple);
        $scope.tabCouple = tabCouple;
    };

    var findIndexMin = function(tab){
        if(tab.length > 0){
            var min = tab[0];
            var index = 0;
            for(var i=1; i<tab.length; i++){
                if(tab[i] < min){
                    min = tab[i];
                    index = i;
                }
            }
            return index;
        }
        return null;
    };
    var findIndexMax = function(tab){ //return index
        if(tab.length > 0){
            var max = tab[0];
            var index = 0;
            for(var i=1; i<tab.length; i++){
                if(tab[i] > max){
                    max = tab[i];
                    index = i;
                }
            }
            return index;
        }
        return null;
    }


    $scope.helloU = "hello you.. !";

});