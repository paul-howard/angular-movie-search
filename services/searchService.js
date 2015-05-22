moviesApp.service('searchService', ['$http', '$location', function($http, $location) {

  var _this = this;

  this.searchTerm = '';
  this.searchResults = {};

  this.search = function() {

    var req = {
      url: 'http://www.omdbapi.com',
      params: {
        s:    _this.searchTerm
      }
    };

    $http(req)
    .success(function(data) {
      _this.searchResults = data;
    });

    $location.path('/');
    return _this.searchResults;
  };

}]);
