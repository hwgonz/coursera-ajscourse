(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItemsTemplate.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}

function FoundItemsDirectiveController() {
  var list = this;

  // // list.cookiesInList = function () {
  // //   for (var i = 0; i < list.items.length; i++) {
  // //     var name = list.items[i].name;
  // //     if (name.toLowerCase().indexOf("cookie") !== -1) {
  // //       return true;
  // //     }
  // //   }
  //
   return false;
  // };
}



NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var nController = this;
  nController.searchTerm = "";
  nController.found = [];

  nController.searchMenuItems = function(){

  if (nController.searchTerm == "") {
    nController.found = [];
  }
  else {
    nController.found = MenuSearchService.getMatchedMenuItems(nController.searchTerm);
  };


  };

  nController.removeItem = function (itemIndex) {
     nController.found.splice(itemIndex, 1);
  };

}


MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    var foundItems = [];

    var response = $http({
          method: "GET",
          url: (ApiBasePath + "/menu_items.json")
          // params: {
          //   category: shortName
          // }
        }).then(function(response){
          var item = {};
          var menu_Items = response.data;

          for (var i = 0; i < menu_Items.menu_items.length; i++) {
            item = menu_Items.menu_items[i];
            if (item.description.includes(searchTerm)) {
              foundItems.push(item)
            };
          };

        }

        );

        return foundItems;

  };

  service.removeItem = function (itemIndex) {
     foundItems.splice(itemIndex, 1);
   };


}

})();
