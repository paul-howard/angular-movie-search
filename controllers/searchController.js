moviesApp.controller('searchController', ['$scope', '$http', '$log', '$location', 'searchService', function($scope, $http, $log, $location, searchService) {

  $scope.searchTerm = 'Search';

  $scope.search = function() {
    searchService.search();
  };

  $scope.$watch('searchTerm', function() {
    searchService.searchTerm = $scope.searchTerm;
  });

  if ($scope.searchTerm) {
    searchService.search();
  }

}]);
