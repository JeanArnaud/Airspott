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
                })

                .state('club.main', {
                    url: '/main',
                    views: {
                        content: {
                            controller: 'ClubCtrl',
                            templateUrl: 'templates/club/overview.html'
                        }
                    }
                })

                .state('club.manage', {
                    url: '/manage',
                    views: {
                        content: {
                            controller: 'ManageClubsCtrl',
                            templateUrl: 'templates/club/list.html'
                        }
                    }
                })

                .state('club.edit', {
                    url: '/edit/:id',
                    views: {
                        content: {
                            controller: 'EditClubCtrl',
                            templateUrl: 'templates/club/edit.html'
                        }
                    }
                })

                .state('club.reports', {
                    url: '/reports',
                    views: {
                        content: {
                            templateUrl: 'templates/club/reports.html'
                        }
                    }
                })

                .state('club.accounting', {
                    url: '/account',
                    views: {
                        content: {
                            controller: 'AccountingCtrl',
                            templateUrl: 'templates/club/accounting.html'
                        }
                    }
                })

                .state('club.sales', {
                    url: '/sales',
                    views: {
                        content: {
                            controller: 'SalesCtrl',
                            templateUrl: 'templates/club/sales.html'
                        }
                    }
                })
            ;

            $urlRouterProvider.otherwise('/customer/main');
        }]);