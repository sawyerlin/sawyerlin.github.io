(function(angular) {
    'use strict';
    var recordControllers = angular.module('recordControllers', []);

    recordControllers.controller('RecordController', ['$scope', '$routeParams', '$http',
            function($scope, $routeParams, $http) {
                var name = $routeParams.name || 'index.md';
                $http.get('../sources/record/' + name).success(function(data) {
                    $scope.markdown = data;
                    if (name !== 'index.md') {
                        DISQUS.reset({
                            reload: true,
                            config: function () {
                                this.page.url = window.localtion.href;
                                this.page.identifier = name;
                            }
                        });
                    }
                });
            }]
            );

})(window.angular);
