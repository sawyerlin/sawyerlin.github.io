(function(angular) {
    'use strict';
    var recordControllers = angular.module('recordControllers', []);

    String.prototype.hashCode = function() {
        var hash = 0;
        if (this.length === 0) return hash;
        for (var i = 0; i < this.length; i++) {
            char = this.charCodeAt(i);
            hash = ((hash<<5)-hash)+char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
    };

    recordControllers.controller('RecordController', ['$scope', '$routeParams', '$http',
            function($scope, $routeParams, $http) {
                var name = $routeParams.name || 'index.md',
                    identifier = name === 'index.md' ? 1 : parseInt(name.replace('.md', '').replace(new RegExp('_', 'g'), ''));

                console.log(identifier);

                $scope.disqusConfig = {
                    disqus_shortname: 'sawyerlin',
                    disqus_identifier: identifier,
                    disqus_url: window.location.href
                };
                $http.get('../sources/record/' + name).success(function(data) {
                    $scope.markdown = data;
                });
            }]
            );

})(window.angular);
