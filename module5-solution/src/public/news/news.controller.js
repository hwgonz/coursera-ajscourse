(function () {
"use strict";

angular.module('public')
.controller('NewsRegController', NewsRegController);

NewsRegController.$inject = ['MenuService'];
function NewsRegController(MenuService) {
  var $ctrl = this;
  var menuItem = {};

  $ctrl.existsFavDish = true;
  $ctrl.regCompleted = false;


  $ctrl.submit = function () {

    var promise = MenuService.getMenuItem($ctrl.user.favmenu);

    promise.then(function (response) {

      menuItem = response.data;
      $ctrl.existsFavDish = true;
      $ctrl.regCompleted = true;
      console.log($ctrl.user.favmenu);
      console.log(menuItem.name);
      console.log(menuItem.description);
      console.log(menuItem.short_name);
      MenuService.menuItem = menuItem;
      MenuService.regCompleted = true;

    })
    .catch(function (error) {
      $ctrl.existsFavDish = false;
      $ctrl.regCompleted = false;
      MenuService.regCompleted = false;
      console.log("Something went terribly wrong.");
    });
  };

}


})();
