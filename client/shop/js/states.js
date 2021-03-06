angular.module('com.airspott.shop')
    .config([

        '$stateProvider', '$urlRouterProvider',

        function ($stateProvider, $urlRouterProvider) {
            'use strict';

            $stateProvider

                .state('shop', {
                    url: '',
                    abstract: true,
                    templateUrl: 'templates/app.html',
                    controller: 'ShopAppCtrl'
                })

                .state('shop.login', {
                    url: '/login',
                    views: {
                        content: {
                            templateUrl: 'templates/account/login.html',
                            controller: 'ShopAccountCtrl'
                        }
                    }
                })

                .state('shop.register', {
                    url: '/register',
                    views: {
                        content: {
                            templateUrl: 'templates/account/register.html',
                            controller: 'ShopAccountCtrl'
                        }
                    }
                })

                .state('shop.main', {
                    url: '/',
                    views: {
                        content: {
                            controller: 'ShopMainCtrl',
                            templateUrl: 'templates/main/frontpage.html'
                        }
                    }
                })

                .state('shop.search', {
                    url: '/search',
                    params: {
                        query: false
                    },
                    views: {
                        content: {
                            controller: 'SearchCtrl',
                            templateUrl: 'templates/search/search.html'
                        }
                    }
                });

            $urlRouterProvider.otherwise('/');

        }]);
