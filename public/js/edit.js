angular.module('app')
.controller('editCtrl',function ($scope,$http, $location, $routeParams) {
  $scope.client = {};
  $scope.saveClient = saveClient;
  loadClient();

  function loadClient() {
    $http({
      url : '/api/clients/'+$routeParams.id,
      method : 'get',
    }).then(function (res) {
      $scope.client = res.data;
    })
  }
  function saveClient() {
    $http({
      url : '/api/clients/'+$routeParams.id,
      method : 'put',
      data: $scope.client
    }).then(function (res) {
      $location.path('/');
    })
  }
})
