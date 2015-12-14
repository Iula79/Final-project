var appBB = angular
.module('appBB', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', '$routeParams', MainRouter]);

function MainRouter(states, router) {
    states
    .state( 'home', {
      url:'/',
      templateUrl: 'home.html'
  }).state( 'show',{
      url:'/show',
      templateUrl:'show.html'
  }).state('/showSingle/:num', {
      url:'/showSingle/:num',
      templateUrl:'show_single'+ $routeParams.num + '.html',
      controller: 'BBController'


});
    router.otherwise('/');
}
