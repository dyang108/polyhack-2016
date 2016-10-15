'use strict'

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
])
.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('')

  $routeProvider.otherwise({redirectTo: '/'})
}])
.controller('MainCtrl', ['$route', '$routeParams', '$location',
  function MainCtrl ($route, $routeParams, $location) {
    this.$route = $route
    this.$location = $location
    this.$routeParams = $routeParams
    this.thing = 'dsafdsa'
}])