(function(angular){ 
    'use strict';

    var sawyerApp = angular.module('sawyerApp', [
            'ngRoute',
            'sawyerControllers',
            'hc.marked'
    ]);

    sawyerApp.config(['$routeProvider','$locationProvider', 'markedProvider', 
            function($routeProvider, $locationProvider, $markedProvider) {
                $routeProvider
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
                    .when('/project/:name', {
                        templateUrl: 'templates/project.html',
                        controller: 'ProjectController'
                    })
                    .when('/player', {
                        templateUrl: 'templates/player.html',
                        controller: 'PlayerController'
                    })
                    .when('/sports', {
                        templateUrl: 'templates/sports.html',
                        controller: 'SportsController'
                    })
                    .otherwise({
                        redirectTo: 'record'
                    });
                $markedProvider.setOptions({
                    gfm: true,
                    tables: true
                });
            }
    ]);

})(window.angular);
