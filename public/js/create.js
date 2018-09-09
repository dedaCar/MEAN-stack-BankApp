angular.module('app')
.controller('createCtrl',function ($scope,$http, $location) {
  $scope.client = {};
  $scope.saveClient = saveClient;

  function saveClient() {
    console.log('xxx');
    $http({
      url : '/api/clients',
      method : 'post',
      data: $scope.client
    }).then(function (res) {
      $location.path('/');
    })
  }
})
