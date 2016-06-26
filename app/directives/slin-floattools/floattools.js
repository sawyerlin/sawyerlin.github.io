(function() {
    var moduleName = 'slin.directives.floattools';

    var module;
    try {
        module = angular.module(moduleName);
    } catch (err) {
        module = angular.module(moduleName, []);
    }

    module.directive('floattools', function() {
        return {
            restrict: 'E',
            templateUrl: 'directives/slin-floattools/floattools.html'
        };
    });
        
})();
