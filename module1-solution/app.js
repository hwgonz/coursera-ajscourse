(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];
function LunchController($scope) {
  $scope.lunchitems = "";
  $scope.feedback = "";

  $scope.checkIfTooMuch = function () {
    var nbrItems = 0;

    if ($scope.lunchitems) {
      nbrItems = countItems($scope.lunchitems);

      if (nbrItems > 3) {
        $scope.feedback = "Too Much!"
      }
      else {
        $scope.feedback = "Enjoy!"
      }
    }
    else {
      $scope.feedback = "Please enter data first"
    }
  };

  function countItems(stext) {
    var aItems = stext.split(",");
    return aItems.length;
  };
}


})();
