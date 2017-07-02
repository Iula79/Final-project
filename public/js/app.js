var appBB = angular
.module('appBB', ['ui.router','ngAnimate'])
.config(function($stateProvider,$urlRouterProvider, $locationProvider){
    $stateProvider
      .state( 'home', {
      url:'/',
      templateUrl: 'home.html'
  }).state( 'show',{
      url:'/show',
      templateUrl:'show.html'
  }).state('showSingle', {
      url:'/showSingle/:id',
      templateUrl:'show_single.html'
});
$urlRouterProvider.otherwise('/');
$locationProvider.html5Mode(true);
});


