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
                .when('/home', {
                    templateUrl: 'templates/home.html',
                    controller: 'HomeController'
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
                .otherwise({
                    redirectTo: 'todo'
                });
        }
    ]);

})(window.angular);
