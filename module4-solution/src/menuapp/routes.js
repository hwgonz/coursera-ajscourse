(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })


  // Categories list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/maincategories.template.html',
    controller: 'MainCategoriesController as categoriesList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('items', {
    url: '/items/{itemId}',
    templateUrl: 'src/menuapp/templates/mainitems.template.html',
    controller: "ItemsController as itemsList",
    resolve: {
      items: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
        return MenuDataService.getMenuForCategory($stateParams.itemId);
      }]
    }
  });

}

})();
