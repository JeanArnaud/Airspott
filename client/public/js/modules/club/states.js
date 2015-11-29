angular.module('com.airspott.club')
    .config([

        '$stateProvider', '$urlRouterProvider',

        function ($stateProvider, $urlRouterProvider)
        {
            'use strict';

            $stateProvider

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

                .state('club.settings', {
                    url: '/settings',
                    views: {
                        content: {
                            controller: 'SettingsCtrl',
                            templateUrl: 'templates/club/settings.html'
                        }
                    }
                });
        }]);