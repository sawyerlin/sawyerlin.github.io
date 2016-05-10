(function(angular){ 
    'use strict';

    var recordApp = angular.module('recordApp', [
        'ngRoute',
        'recordControllers',
        'hc.marked'
        ]);

    recordApp.config(['$routeProvider','$locationProvider', 'markedProvider',
        function($routeProvider, $locationProvider, $markedProvider) {
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
