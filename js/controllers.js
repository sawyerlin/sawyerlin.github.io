(function(angular) {
    'use strict';
    var sawyerControllers = angular.module('sawyerControllers', ['ngCookies']);

    sawyerControllers.controller('HeadController', ['$scope', '$location',
        function($scope, $location) {
            $scope.headers = config.headers.contents;

            var headerValue = window.location.hash.slice(2, window.location.hash.length);
            if (headerValue.length && config.headers.active !== headerValue ) {
                var header = $scope.headers[headerValue];
                var oldHeader = $scope.headers[config.headers.active];

                if (header) {
                    header.class = oldHeader.class;
                    delete oldHeader.class;
                }
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

    sawyerControllers.controller('AboutController', ['$scope', '$routeParams', '$http',
        function($scope, $routeParams, $http) {
            $http.get('database/about/source.json').success(function (data) {
                $scope.projects = data.projects;
            });
        }]
    );

    sawyerControllers.controller('TodoController', ['$scope', '$routeParams', '$http',
        function($scope, $routeParams, $http) {
            $http.get('sources/todo.md').success(function(data) {
                $scope.markdown = data;
            });
        }]
    );

    sawyerControllers.controller('SportsController', ['$scope', '$routeParams', '$http',
            function($scope, $routeParams, $http) {
            }]
    );

    sawyerControllers.controller('ProjectController', ['$scope', '$routeParams', '$http',
        function($scope, $routeParams, $http) {
            var name = $routeParams.name || 'default';
            console.log(name);
            $scope.template = name + '.html';
        }]
    );

    sawyerControllers.controller('RecordController', ['$scope', '$routeParams', '$http', 
        function($scope, $routeParams, $http) {
            var name = $routeParams.name || 'index.md';
            $http.get('sources/record/' + name).success(function(data) {
                $scope.markdown = data;
            });
        }]
    );

})(window.angular);
