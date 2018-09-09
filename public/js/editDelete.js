angular.module('app')
.controller('editDeleteCtrl',function ($scope,$http, $location) {
  $scope.clients = [];
  $scope.getClients = getClients;
  $scope.deleteClients = deleteClients;
  getClients();

  function getClients() {
    $http({
      url : '/api/clients',
      method : 'get'
    }).then(function (res) {
      $scope.clients = res.data;
    })
  }

  function deleteClients(id) {
    $http({
      url : '/api/clients/'+id,
      method : 'delete'
    }).then(function (res) {
      $location.path('/');
    })
  }
})
