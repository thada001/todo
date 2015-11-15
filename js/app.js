angular.module('todo', ['firebase', 'ui.router'])
  .config(function($httpProvider, $stateProvider, $urlRouterProvider) {
    $httpProvider.interceptors.push('httpRequestInterceptor');
    $urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl',
      })
      .state('list', {
        url: '/list/:listType',
        templateUrl: 'templates/type.html',
        controller: 'typeCtrl',
      })
  })
