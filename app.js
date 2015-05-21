// --------------------------------------------------------------------------
// * Define Module
// --------------------------------------------------------------------------
var moviesApp = angular.module('moviesApp', ['ngRoute']);

// --------------------------------------------------------------------------
// * Configure Routes
// --------------------------------------------------------------------------
moviesApp.config(function($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: '/pages/results.html',
      controller: 'searchController'
    })
    .when('/details/:id', {
      templateUrl: '/pages/details.html',
      controller: 'detailsController'
    });

});
