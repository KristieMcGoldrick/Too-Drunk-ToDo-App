angular.module('todoListApp', ['ui.router'])
.config(config)

function config($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    controller: 'appController',
    templateUrl:'views/home.html'
  })
}
