(function(angular){ 
    'use strict';

    var sawyerApp = angular.module('sawyerApp', [
            'ngRoute',
            'sawyerControllers',
            'hc.marked'
        ]);

    sawyerApp.config(['$routeProvider', 'markedProvider', function($routeProvider, $markedProvider) {
            $markedProvider.setOptions({gfm: true});

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
                .when('/project', {
                    templateUrl: 'templates/project.html',
                    controller: 'ProjectController'
                })
                .otherwise({
                    redirectTo: 'record'
                });
        }
    ]);

})(window.angular);
