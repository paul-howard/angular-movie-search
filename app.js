var moviesApp = angular.module('moviesApp', []);

moviesApp.controller('searchController', ['$scope', function($scope){
  $scope.searchTerm = '';
}])
