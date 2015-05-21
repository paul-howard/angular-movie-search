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
    .when('/details', {
      templateUrl: '/pages/details.html',
      controller: 'detailsController'
    });

});

// --------------------------------------------------------------------------
// * Define Controllers
// --------------------------------------------------------------------------
moviesApp.controller('searchController', ['$scope', '$http', '$log', function($scope, $http, $log) {

  $scope.searchTerm = 'Mad Max';

  // * Main Search Function
  $scope.search = function() {

    var req = {
      url: 'http://www.omdbapi.com',
      params: {
        s:    $scope.searchTerm
      }
    };

    $http(req).success(function(data) {
      $scope.movies = data;
    });

  };

  // * Auto-search on load
  $scope.search();

}]);

moviesApp.controller('detailsController', ['$scope', '$http', '$log', function($scope, $http, $log) {

  $scope.test = '42';

}]);
