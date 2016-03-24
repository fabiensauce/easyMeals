/**
 * Created by fabien on 17/03/2016.
 */


var myService = angular.module('services');
myService.service('AlcoholService', function() {

    var id = 0;
    var bieres = [
        {
            id:'kro',
            name:'kronenbourg',
            alcoholType:'biere',
            qtyCl:25,
            degre:4.2,
            price:10,
            txtQty:'',
            nbItem:1
        },
        {
            id:'1664',
            name:'1664',
            alcoholType:'biere',
            qtyCl:25,
            degre:5,
            price:10,
            txtQty:'',
            nbItem:1
        },
        {
            id:'leffe',
            name:'leffe',
            alcoholType:'biere',
            qtyCl:25,
            degre:6,
            price:12,
            txtQty:'',
            nbItem:1
        },
        {
            id:'deliruim',
            name:'deliruim',
            alcoholType:'biere',
            qtyCl:25,
            degre:8.5,
            price:12,
            txtQty:'',
            nbItem:1
        }
    ];

    var vins = [
        {
            id:'vinr',
            name:'vin rouge',
            alcoholType:'vin',
            qtyCl:70,
            degre:12,
            price:5,
            txtQty:'',
            nbItem:1
        },
        {
            id:'vinb',
            name:'vin blanc',
            alcoholType:'vin',
            qtyCl:70,
            degre:11,
            price:5,
            txtQty:'',
            nbItem:1
        },
        {
            id:'vinro',
            name:'vin rosé',
            alcoholType:'vin',
            qtyCl:70,
            degre:11,
            price:5,
            txtQty:'',
            nbItem:1
        }
    ];

    var forts = [
        {
            id:'fort',
            name:'vodka',
            alcoholType:'fort',
            qtyCl:70,
            degre:40,
            price:15,
            txtQty:'',
            nbItem:1
        },
        {
            id:'fort',
            name:'rhum',
            alcoholType:'fort',
            qtyCl:70,
            degre:37,
            price:15,
            txtQty:'',
            nbItem:1
        },
        {
            id:'fort',
            name:'wisky',
            alcoholType:'fort',
            qtyCl:70,
            degre:37,
            price:15,
            txtQty:'',
            nbItem:1
        }
    ];

    var filterBiereQties =  [{id:0, name:'70 cl', cl:70}, {id:1, name:'pack 6x25cl', cl:150},{id:2, name:'pack 12x25cl', cl:300}, {id:3, name:'pack 24x25cl', cl:600}];
    var filterVinQties =  [{id:0,name:'70 cl', cl:70},{id:1,name:'1,5 l', cl:150}, {id:2,name:'3 l', cl:300}];
    var filterFortQties = [{id:0,name:'70 cl', cl:70},{id:1,name:'1,5 l', cl:150}, {id:2,name:'3 l', cl:300}];


    getBieres = function(){
        return bieres;
    };
    getVins = function(){
        return vins;
    };
    getForts = function(){
        return forts;
    };
    getFilterBiereQties = function(){
        return filterBiereQties;
    };
    getFilterVinQties = function(){
        return filterVinQties;
    };
    getFilterFortQties = function(){
        return filterFortQties;
    };

    getFilterBiereQties

    return {
        getBieres: getBieres,
        getVins: getVins,
        getForts: getForts,
        getFilterBiereQties: getFilterBiereQties,
        getFilterVinQties: getFilterVinQties,
        getFilterFortQties: getFilterFortQties
    };
});
