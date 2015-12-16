appBB.directive('slider', function($timeout) {
  return {
    restrict: 'AE',
    replace: true,
    scope: {
      images: '='
    },
    templateUrl: 'directives/slider.html',
    link: function(scope, elem, attrs) {}
  };
});
