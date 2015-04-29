(function(angular){ 
    'use strict';

    var sawyerApp = angular.module('sawyerApp', [
            'ngRoute',
            'sawyerControllers'
        ]);

    sawyerApp.config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .when('/home', {
                    templateUrl: 'templates/home.html',
                    controller: 'HomeController'
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
                .otherwise({
                    redirectTo: 'home'
                });
        }
    ]);

})(angular);
