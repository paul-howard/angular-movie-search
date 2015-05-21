moviesApp.controller('detailsController', ['$scope', '$http', '$log', '$routeParams', function($scope, $http, $log, $routeParams) {

  $scope.id = $routeParams.id;

  var req = {
        url: 'http://www.omdbapi.com',
        params: {
          i: $scope.id
        }
      };

  $http(req).success(function(result) {
    $scope.json   = result;

    $scope.title  = result.Title;
    $scope.year   = result.Year;
    $scope.plot   = result.Plot;
    $scope.poster = result.Poster;
  });

}]);
