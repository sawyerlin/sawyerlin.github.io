(function(angular) {
    'use strict';

    var sawyerControllers = angular.module('sawyerControllers', []);

    sawyerControllers.controller('HeadController', ['$scope',
            function($scope) {
                $scope.headers = config.headers.contents;
                $scope.changeHeader = function(headerValue) {
                    if (config.headers.active === headerValue) return;
                    if (config.headers.active) {
                        $('#' + config.headers.active).removeClass('active');
                    }

                    $('#' + headerValue).addClass('active');
                    config.headers.active = headerValue;
                }
            }]
    );

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
