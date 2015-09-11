var apps=angular.module('starter', ['ionic', 'ngRoute', 'starter.controllers', 'starter.services'])
.run(function($http) {


  })

.config(['$routeProvider','$stateProvider',
         function($routeProvider,$stateProvider) {

 
  $routeProvider
    // .when('/dashboard',
    //     {
    //         templateUrl: 'templates/dashboard.html',
    //         controller: 'DashCtrl'
    //     })
   .when('/menu',
        {
            templateUrl: 'templates/menu.html',
            controller: 'MenuController'
        })
   
    .otherwise('/menu');

}]);

