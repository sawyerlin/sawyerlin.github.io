(function(angular){ 
    'use strict';

    var sawyerApp = angular.module('sawyerApp', [
            'ngRoute',
            'sawyerControllers',
            'hc.marked'
    ]);

    // ui-router 
    // x-editable
    sawyerApp.config(['$routeProvider','$locationProvider', 'markedProvider', 
            function($routeProvider, $locationProvider, $markedProvider) {
                $routeProvider
                    .when('/about', {
                        templateUrl: 'templates/about.html',
                        controller: 'AboutController'
                    })
                    .when('/myworks', {
                        templateUrl: 'templates/myworks.html',
                        controller: 'MyWorksController'
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
                        redirectTo: '/about'
                    });
                $markedProvider.setOptions({
                    gfm: true,
                    tables: true
                });
            }
    ]);

})(window.angular);
