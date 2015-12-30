(function(angular){ 
    'use strict';

    var sawyerApp = angular.module('sawyerApp', [
            'ngRoute',
            'sawyerControllers',
            'hc.marked'
    ]);

    sawyerApp.config(['$routeProvider','$locationProvider', 'markedProvider', 
            function($routeProvider, $locationProvider, $markedProvider) {
                $markedProvider.setOptions({gfm: true});
                $routeProvider
                    .when('/', {
                        templateUrl: 'templates/about.html',
                        controller: 'AboutController'
                    })
                    .when('/about', {
                        templateUrl: 'templates/about.html',
                        controller: 'AboutController'
                    })
                    .when('/todo', {
                        templateUrl: 'templates/todo.html',
                        controller: 'TodoController'
                    })
                    .when('/record', {
                        templateUrl: 'templates/record.html',
                        controller: 'RecordController'
                    })
                    .when('/record/:name', {
                        templateUrl: 'templates/record.html',
                        controller: 'RecordController'
                    })
                    .when('/project', {
                        templateUrl: 'templates/project.html',
                        controller: 'ProjectController'
                    })
                    .otherwise({
                        redirectTo: 'record'
                    });
                $locationProvider.html5Mode(true);
            }
    ]);

})(window.angular);
