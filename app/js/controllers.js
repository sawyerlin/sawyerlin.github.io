(function(angular) {
    'use strict';

    var sawyerControllers = angular.module('sawyerControllers', []);

    sawyerControllers.controller('HomeController', ['$scope', '$routeParams',
            function($scope, $routeParams) {
            }]
    );

    sawyerControllers.controller('DemosController', ['$scope', '$routeParams',
            function($scope, $routeParams) {
            }]
    );

    sawyerControllers.controller('ExperimentsController', ['$scope', '$routeParams',
            function($scope, $routeParams) {
            }]
    );

    sawyerControllers.controller('ContactController', ['$scope', '$routeParams',
            function($scope, $routeParams) {
            }]
    );

    sawyerControllers.controller('WorkController', ['$scope', '$routeParams',
            function($scope, $routeParams) {
            }]
    );

    sawyerControllers.controller('TodoController', ['$scope', '$routeParams', '$http',
            function($scope, $routeParams, $http) {
                $http.get('sources/todo.md').success(function(data) {
                    $scope.markdown = data;
                });
            }]
    );
})(window.angular);
