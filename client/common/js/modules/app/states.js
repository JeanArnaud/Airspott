angular.module('com.airspott')
  .config([

    '$stateProvider', '$urlRouterProvider',

    function ($stateProvider, $urlRouterProvider) {
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
        });
    }]);
