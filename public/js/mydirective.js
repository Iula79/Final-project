
appBB.directive("mydirective", function(){
    return {
        restrict: 'AECM',
        templateUrl: 'directives/mydirective.html',
        replace:true,
        scope: {
            testOne:"@"
        }
    }
})
