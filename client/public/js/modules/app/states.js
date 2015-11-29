angular.module('com.airspott')
    .config([

        '$stateProvider', '$urlRouterProvider',

        function ($stateProvider, $urlRouterProvider)
        {
            'use strict';

            $stateProvider

                .state('customer', {
                    url: '/customer',
                    abstract: true,
                    templateUrl: 'templates/app/main.html',
                    controller: 'AppCtrl'
                })

                .state('customer.main', {
                    url: '/main',
                    views: {
                        content: {
                            controller: 'MainCtrl',
                            templateUrl: 'templates/main/frontpage.html'
                        }
                    }
                })



                .state('club', {
                    url: '/club',
                    abstract: true,
                    templateUrl: 'templates/app/club.html',
                    controller: 'ClubAppCtrl'
                })

                .state('clubLogin', {
                    url: '/club/login',
                    templateUrl: 'templates/club/login.html',
                    controller: 'ClubAccountCtrl'
                })

                .state('sellerRegister', {
                    url: '/club/register',
                    templateUrl: 'templates/club/register.html',
                    controller: 'ClubAccountCtrl'
                });

            $urlRouterProvider.otherwise('/customer/main');
        }]);