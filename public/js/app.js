angular.module('app', [
  'ngRoute',
])

  .config(function ($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider
    .when("/",{
      templateUrl : "../clients.html",
      controller : "mainCtrl"
    })
    .when("/create",{
      templateUrl : "../create.html",
      controller : "createCtrl"
    })
    .when("/edit/:id",{
      templateUrl : "../edit.html",
      controller : "editCtrl"
    })
    .when("/editDelete",{
      templateUrl : "../edit-delete.html",
      controller : "editDeleteCtrl"
    })
    .otherwise({
      template : "<h1>Error 404 !!!</h1>"
    })
  })
