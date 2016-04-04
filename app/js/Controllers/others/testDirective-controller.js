/**
 * Created by fabien on 04/03/2016.
 */
var myModule = angular.module('controllers');







myModule.controller('TestDragDropCtrl', function($scope) {
    $scope.courses = [
        {
            id:'burgers1',
            name:'burgers',
            nbPerson:4,
            ingredients:[{qty:50, unit:'g', food:'tomato'},{qty:4, unit:'', food:'bread'}],
            description:'faire des burgers ahahah'
        },
        {
            id:'poisson2',
            name:'poisson',
            nbPerson:2,
            ingredients:[{qty:1, unit:'', food:'aubergine'},{qty:200, unit:'g', food:'cod'}],
            description:'le cabillaud c le meilleur'
        },
        {
            id:'test3',
            name:'test3',
            nbPerson:2,
            ingredients:[{qty:1, unit:'', food:'aubergine'},{qty:200, unit:'g', food:'cod'}],
            description:'le cabillaud c le meilleur'
        },
        {
            id:'test4',
            name:'test4',
            nbPerson:2,
            ingredients:[{qty:1, unit:'', food:'aubergine'},{qty:200, unit:'g', food:'cod'}],
            description:'le cabillaud c le meilleur'
        },
        {
            id:'test5',
            name:'test5',
            nbPerson:2,
            ingredients:[{qty:1, unit:'', food:'aubergine'},{qty:200, unit:'g', food:'cod'}],
            description:'le cabillaud c le meilleur'
        }
    ];

    $scope.results = [];
});






myModule.controller('TestWatchCtrl', function($scope) {


        $scope.bill = {discount:0, discount2:0, discount3:0};
        $scope.items = [
            {title: 'Paint pots', quantity: 8, price: 3.95},
            {title: 'Polka dots', quantity: 2, price: 12.95},
            {title: 'Pebbles', quantity: 5, price: 6.95}
        ];
        $scope.totalCart = function() {
            var total = 0;
            for (var i = 0; i < $scope.items.length; i++) {
                total = total + $scope.items[i].price * $scope.items[i].quantity;
            }
            return total;
        }
        $scope.subtotal = function() {
            return $scope.totalCart() - $scope.bill.discount;
        };

    //DISCOUNT 0
    $scope.$watch($scope.totalCart, calculateDiscount, true);
    function calculateDiscount(newValue, oldValue, scope) {
        $scope.bill.discount = newValue > 100 ? 10 : 0;
    }
    //DISCOUNT 1
    $scope.calculateDiscount1 = function(){
        return $scope.totalCart() > 100 ? 10 : 0;
    };
    //DISCOUNT 2
    $scope.calculateDiscount2 = function(){
        $scope.bill.discount2 = $scope.totalCart() > 100 ? 10 : 0;
    }
    $scope.test2 = $scope.totalCart();

    //DISCOUNT 3
    $scope.$watch('items', calculateDiscount3,true);
    function calculateDiscount3(newValue,oldValue,scope) {
        $scope.bill.discount3 =  $scope.totalCart() > 100 ? 10 : 0;
        $scope.test = newValue;
    }


});



myModule.controller('TestEvalCtrl', function($scope) {

    $scope.vareval=0;
    $scope.vareval1=0;
    $scope.vareval2=0;
    $scope.vareval3=0;
    $scope.vareval4=0;
    $scope.vareval5=0
    $scope.vareval6=0;
    $scope.vareval7=0;
    $scope.vareval8=0;
    $scope.vareval9=0;
    $scope.vareval10=0;
    $scope.vareval11=0;

    /*
    $scope.eval1 = function(){
        return ($scope.eval2()+1);
    }
    $scope.eval2 = function(){
        return ($scope.eval3()+1);
    }
    $scope.eval3 = function(){
        return $scope.eval;
    }
    $scope.eval3 = function(){
        $scope.vareval3=$scope.vareval4+1;
        return  $scope.vareval3;
    }
    */
    $scope.eval1 = function(){
        $scope.vareval1=$scope.vareval2+1;
        return  $scope.vareval1;
    }
    $scope.eval2 = function(){
        $scope.vareval2=$scope.vareval3+1;
        return  $scope.vareval2;
    }
    $scope.eval3 = function(){
        $scope.vareval3=$scope.vareval4+1;
        return  $scope.vareval3;
    }






    $scope.eval4 = function(){
        $scope.vareval4=$scope.vareval5+1;
        return  $scope.vareval4;
    }
    $scope.eval5 = function(){
        $scope.vareval5=$scope.vareval6+1;
        return  $scope.vareval5;
    }
    $scope.eval6 = function(){
        $scope.vareval6=$scope.vareval7+1;
        return  $scope.vareval6;
    }
    $scope.eval7 = function(){
        $scope.vareval7=$scope.vareval8+1;
        return  $scope.vareval7;
    }
    $scope.eval8 = function(){
        $scope.vareval8=$scope.vareval9+1;
        return  $scope.vareval8;
    }
    $scope.eval9 = function(){
        $scope.vareval9=$scope.vareval10+1;
        return  $scope.vareval9;
    }
    $scope.eval10 = function(){
        $scope.vareval10=$scope.vareval11+1;
        return  $scope.vareval10;
    }
    $scope.eval11 = function(){
        $scope.vareval11=$scope.vareval12+1;
        return  $scope.vareval11;
    }
    $scope.eval12 = function(){
        $scope.vareval12=$scope.vareval13+1;
        return  $scope.vareval12;
    }
    $scope.eval13 = function(){
        $scope.vareval13=$scope.vareval+1;
        return  $scope.vareval13;
    }

});

myModule.controller('TestDirectiveCtrl', function($scope, $timeout) {
    $scope.list1 = [];
    $scope.list2 = [];
    $scope.list3 = [];
    $scope.list4 = [];

    $scope.list5 = [
        { 'title': 'Item 1', 'drag': true },
        { 'title': 'Item 2', 'drag': true },
        { 'title': 'Item 3', 'drag': true },
        { 'title': 'Item 4', 'drag': true },
        { 'title': 'Item 5', 'drag': true },
        { 'title': 'Item 6', 'drag': true },
        { 'title': 'Item 7', 'drag': true },
        { 'title': 'Item 8', 'drag': true }
    ];

    // Limit items to be dropped in list1
    $scope.optionsList1 = {
        accept: function(dragEl) {
            if ($scope.list1.length >= 2) {
                return false;
            } else {
                return true;
            }
        }
    };
});
