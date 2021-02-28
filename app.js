(function () {
'use strict';

angular.module("ShoppingListCheckOff",[])
.controller("ToBuyController",ToBuyController)
.controller("AlreadyBoughtController",AlreadyBoughtController)
.service("ShoppingListCheckOffService", ShoppingListCheckOffService)
;

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(service) {
    var toBuy = this;

    // toBuy.getItems = function () {
    //     return ShoppingListCheckOffService.getToBuyItems();
    // };

    toBuy.items = service.getToBuyItems();

    toBuy.buyItem = function (index) {
        console.log(toBuy.items[index].name, toBuy.items[index].quantity);
        service.buyItem(index);
    };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;

    alreadyBought.items = ShoppingListCheckOffService.getAlreadyItems();
}

function ShoppingListCheckOffService() {
    var service = this;

    // List of to-buy items
    var toBuyItems = [
        { name: "chocolate cookies", quantity: 5 },
        { name: "blueberry cookies", quantity: 5 },
        { name: "orange cookies", quantity: 5 },
        { name: "cheese cookies", quantity: 5 },
        { name: "apple cookies", quantity: 5 }
    ];
    var alreadyItems = [];

    service.buyItem = function (index) {
        var item = {
            name: toBuyItems[index].name,
            quantity: toBuyItems[index].quantity
        };
        alreadyItems.push(item);
        toBuyItems.splice(index, 1);
    };

    service.getToBuyItems = function () {
        return toBuyItems;
    };

    service.getAlreadyItems = function () {
        return alreadyItems;
    };
}

})();
