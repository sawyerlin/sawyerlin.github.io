(function(angular){ 
    'use strict';

    var recordApp = angular.module('recordApp', [
        'ngRoute',
        'recordControllers',
        'hc.marked',
        'angularUtils.directives.dirDisqus'
        ]);

    recordApp.config(['$routeProvider','$locationProvider', 'markedProvider',
        function($routeProvider, $locationProvider, $markedProvider) {
            $locationProvider.hashPrefix('!');
            $routeProvider.when('/', {
                templateUrl: '../templates/record.html',
                controller: 'RecordController'
            }).when('/record/:name', {
                templateUrl: '../templates/record.html',
                controller: 'RecordController'
            });
        }
    ]);
})(window.angular);
