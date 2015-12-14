var appBB = angular
.module('appBB', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', MainRouter]);

function MainRouter(states, router) {
    states
    .state( 'home', {
      url:'/',
      templateUrl: 'home.html'
  }).state( 'show',{
      url:'/show',
      templateUrl:'show.html'
  }).state('show/apt1'),{
      url:'/apt1',
      templateUrl:'partial-apt1.html'
  }.state('show/apt2'),{
      url:'/apt2',
      templateUrl:'partial-apt2.html'
  }.state('show/apt3'),{
      url:'/apt3',
      templateUrl:'partial-apt3.html'
  }
    router.otherwise('/');
}
