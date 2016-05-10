(function(angular) {
    'use strict';
    var sawyerControllers = angular.module('sawyerControllers', ['ngCookies']);
    sawyerControllers.directive('html5vfix', function() {
        return {
            restrict: 'A',
            link: function(scope, element, attr) {
                attr.$set('src', attr.vsrc);
            }
        };
    });

    sawyerControllers.controller('HeadController', ['$scope', '$location',
        function($scope, $location) {
            $scope.headers = config.headers.contents;

            var headerValue = window.location.hash.slice(2, window.location.hash.length);
            if (headerValue.length && config.headers.active !== headerValue) {
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
            $scope.template = name + '.html';
        }]
    );

    sawyerControllers.controller('PlayerController', ['$scope', '$routeParams', '$http', 
        function($scope, $routeParams, $http) {
            var videoSource = $routeParams.videoSource || 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4';
            var name = $routeParams.name;
            $scope.videoSource = videoSource;
            $scope.convert = function() {
                var api = config.serverPath + 'convert';
                $.ajax({
                    url: api,
                    data: 'name=' + name,
                    type: 'POST',
                    success: function(data) {
                        $('#gif').attr('src', config.serverPath + 'upload/' + data);
                    }
                });
            };
        }]
    );

    sawyerControllers.controller('GifgeneratorController', ['$scope', '$routeParams', '$http',
            function($scope, $routeParams, $http) {
                $scope.files = [];
                var fileInput = $('#fileinput');
                fileInput.change(function() {
                    _.each(this.files, function(file) {
                        file.state = 'send';
                        $scope.files.push(file);
                    });
                    $scope.$apply();
                });
                $scope.select = function() {
                    fileInput.click();
                };
                $scope.empty = function() {
                    $scope.files = [];
                };
                $scope.upload = function(file) {
                    var api = config.serverPath + 'upload';
                    switch (file.state) {
                        case 'send':
                            var fd = new FormData();
                            file.state = 'hourglass';
                            fd.append('upload_file', file);
                            $.ajax({
                                url: api,
                                data: fd,
                                cache: false,
                                contentType: false,
                                processData: false,
                                type: 'POST',
                                success: function(data) {
                                    file.state = 'expand';
                                    $scope.$apply();
                                }
                            });
                            break;
                        case 'expand':
                            window.location.href = '#/player?videoSource=' + api + '/' + file.name + '&name=' + file.name;
                            break;
                        default:
                            break;
                    }
                };
            }]
    );

})(window.angular);
