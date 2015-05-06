(function(angular) {
    'use strict';

    var sawyerControllers = angular.module('sawyerControllers', []);

    sawyerControllers.controller('HeadController', ['$scope', 
            function($scope) {
                $scope.headers = config.headers.contents;

                var headerValue = window.location.hash.slice(2, window.location.hash.length);
                if (headerValue.length && config.headers.active !== headerValue ) {
                    var header = _.find($scope.headers, function(header) {
                        return header.value === headerValue;
                    });
                    var oldHeader = _.find($scope.headers, function(header) {
                        return header.value === config.headers.active;
                    });
                    header.class = oldHeader.class;
                    delete oldHeader.class;
                    config.headers.active = headerValue;
                }

                $scope.changeHeader = function(headerValue) {
                    if (config.headers.active === headerValue) return;
                    if (config.headers.active) {
                        $('#' + config.headers.active).removeClass('active');
                    }

                    $('#' + headerValue).addClass('active');
                    config.headers.active = headerValue;
                };
            }]
    );

    sawyerControllers.controller('HomeController', ['$scope', '$routeParams',
            function($scope, $routeParams) {
            }]
    );

    sawyerControllers.controller('ToolsController', ['$scope', '$routeParams',
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
