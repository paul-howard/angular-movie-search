var moviesApp = angular.module('moviesApp', []);

moviesApp.controller('searchController', ['$scope', '$http', function($scope, $http) {

  $scope.searchTerm = '';

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

}]);
