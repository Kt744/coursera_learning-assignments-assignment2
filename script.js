(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('BuyController', BuyController)
  .controller('BoughtController', BoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  BuyController.$inject = ['$scope','ShoppingListCheckOffService'];
  function BuyController($scope, ShoppingListCheckOffService) {
    $scope.boughtItem = function(index) {
      ShoppingListCheckOffService.boughtItem(index);
    };
    $scope.itemsToBuy = function() {
      return ShoppingListCheckOffService.getItemsToBuy();
    };
    $scope.isEmpty = function() {
      return ShoppingListCheckOffService.isListToBuyEmpty();
    };
  }

  BoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];
  function BoughtController($scope, ShoppingListCheckOffService) {
    $scope.itemsBought = function() { return ShoppingListCheckOffService.getItemsBought(); };
    $scope.isEmpty = function() { return ShoppingListCheckOffService.isListBoughtEmpty();  };
  }

  function ShoppingListCheckOffService() {
    var buy = [
      { name: "cookies", quantity: 10 },
      { name: "chips", quantity: 5  },
      { name: "bottels", quantity: 12  },
      { name: "Chocolate",  quantity: 20 },
      { name: "Bismol",    quantity: 15 }
    ];
    var bought = [];

    return {
      boughtItem: function(itemIndex) {
          var item = buy[itemIndex];

          buy.splice(itemIndex,1);
          bought.push(item);
        },
      getItemsToBuy: function () { return buy; },
      isListToBuyEmpty: function () { return buy[0] === undefined; },
      getItemsBought: function () { return bought; },
      isListBoughtEmpty: function () { return bought[0] === undefined; }
    };
  }
})();
