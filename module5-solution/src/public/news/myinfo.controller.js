(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService'];
function MyInfoController(MenuService) {
  var $ctrl = this;
  var menuItem = {};

  $ctrl.existsFavDish = true;
  $ctrl.regCompleted = false;

  if (MenuService.regCompleted) {

    $ctrl.menuItem = MenuService.menuItem;
    $ctrl.regCompleted = true;
    
  }


}


})();
