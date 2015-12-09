(function(angular) {
    'use strict';
    var sawyerControllers = angular.module('sawyerControllers', []);
    sawyerControllers.controller('HeadController', ['$scope', 
        function($scope) {
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
            $http.get('sources/about.md').success(function(data) {
                $scope.markdown = data;
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

    sawyerControllers.controller('ProjectController', ['$scope', '$routeParams', '$http',
        function($scope, $routeParams, $http) {
            console.log('project controller');
            $scope.loadProfile = function(profileName) {
                $http.get('https://api.github.com/users/' + profileName).success(function(data) {
                    $scope.profile = data;
                });
            };
            $scope.cleanProfile = function() {
                $scope.profile = null;
            };
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
