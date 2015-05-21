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
