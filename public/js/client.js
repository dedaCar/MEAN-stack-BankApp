angular.module('app')
.controller('mainCtrl',function ($scope,$http) {
  $scope.clients = [];
  $scope.getClients = getClients;
  getClients();

  function getClients() {
    console.log('xxx');
    $http({
      url : '/api/clients',
      method : 'get'
    }).then(function (res) {
      $scope.clients = res.data;
    })
  }
})
