(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var ToBuyList = this;

  ToBuyList.items = ShoppingListCheckOffService.getToBuyItems();

  ToBuyList.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex)
  }

  ToBuyList.isEmpty = function () {
    return ShoppingListCheckOffService.isToBuyItemsEmpty();
  }

}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var BoughtList = this;

  BoughtList.items = ShoppingListCheckOffService.getBoughtItems();

  BoughtList.isEmpty = function () {
    return ShoppingListCheckOffService.isBoughtItemsEmpty();
  }

}


function ShoppingListCheckOffService() {
  var service = this;

  // List of bought items
  var boughtItems = [];

  // List of to buy items
  var tobuyItems = [
    { name: "Milk", quantity: 5 },
    { name: "Donuts", quantity: 6 },
    { name: "Cookies", quantity: 7 },
    { name: "Chocolate", quantity: 2 },
    { name: "Peanut Butter", quantity: 3 }
];


  service.buyItem = function (itemIndex) {
    boughtItems.push(tobuyItems[itemIndex]);
    tobuyItems.splice(itemIndex, 1);
  };

  service.getToBuyItems = function () {
    return tobuyItems;
  };

  service.isToBuyItemsEmpty = function () {
    if (tobuyItems.length > 0) {
      return false;
    }
    else {
      return true;
    }
  };

  service.isBoughtItemsEmpty = function () {
    if (boughtItems.length > 0) {
      return false;
    }
    else {
      return true;
    }
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}
})();
