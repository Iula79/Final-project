var appBB = angular
.module('appBB', ['ui.router','ngAnimate'])
.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
      .state( 'intro', {
      url:'/',
      templateUrl: 'home.html'
  }).state( 'home',{
      url:'/home',
      templateUrl:'show.html'
  }).state('apartment', {
      url:'/apartment/:id',
      templateUrl:'apartment.html'
}).state('about', {
      url:'/about',
      templateUrl:'about.html'
});
$urlRouterProvider.otherwise('/');

});


