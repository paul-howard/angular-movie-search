moviesApp.controller('resultsController', ['$scope', 'searchService', function($scope, searchService) {

  $scope.searchTerm = searchService.searchTerm;
  $scope.searchResults = searchService.searchResults;

  $scope.$watch(

    function() {
      return searchService.searchResults;
    },

    function(newVal, oldVal) {
      if (typeof newVal !== 'undefined') {
        $scope.searchResults = searchService.searchResults;
      }
    }

  );

}]);
