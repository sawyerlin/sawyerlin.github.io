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
                .when('/tools', {
                    templateUrl: 'templates/tools.html',
                    controller: 'ToolsController'
                })
                .when('/demos', {
                    templateUrl: 'templates/demos.html',
                    controller: 'DemosController'
                })
                .when('/experiments', {
                    templateUrl: 'templates/experiments.html',
                    controller: 'ExperimentsController'
                })
                .when('/contact', {
                    templateUrl: 'templates/contact.html',
                    controller: 'ContactController'
                })
                .when('/work', {
                    templateUrl: 'templates/work.html',
                    controller: 'WorkController'
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
                .otherwise({
                    redirectTo: 'record'
                });
        }
    ]);

})(window.angular);
