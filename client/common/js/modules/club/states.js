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
                            templateUrl: 'templates/overview.html'
                        }
                    }
                })

                .state('club.manage', {
                    url: '/manage',
                    views: {
                        content: {
                            controller: 'ManageClubsCtrl',
                            templateUrl: 'templates/list.html'
                        }
                    }
                })

                .state('club.edit', {
                    url: '/edit/:id',
                    views: {
                        content: {
                            controller: 'EditClubCtrl',
                            templateUrl: 'templates/edit.html'
                        }
                    }
                })

                .state('club.reports', {
                    url: '/reports',
                    views: {
                        content: {
                            templateUrl: 'templates/reports.html'
                        }
                    }
                })

                .state('club.accounting', {
                    url: '/account',
                    views: {
                        content: {
                            controller: 'AccountingCtrl',
                            templateUrl: 'templates/accounting.html'
                        }
                    }
                })

                .state('club.sales', {
                    url: '/sales',
                    views: {
                        content: {
                            controller: 'SalesCtrl',
                            templateUrl: 'templates/sales.html'
                        }
                    }
                })

                .state('club.settings', {
                    url: '/settings',
                    views: {
                        content: {
                            controller: 'SettingsCtrl',
                            templateUrl: 'templates/settings.html'
                        }
                    }
                });
        }]);
