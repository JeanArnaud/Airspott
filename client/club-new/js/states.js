angular.module('com.airspott.club')
  .config([

    '$stateProvider', '$urlRouterProvider',

    function ($stateProvider, $urlRouterProvider) {
      'use strict';

      $stateProvider

        .state('club-new', {
          url: '',
          abstract: true,
          templateUrl: 'template/app.html',
          controller: 'ClubAppCtrl'
        })
        .state('clubLogin', {
          url: '/login',
          templateUrl: 'template/login.html',
          controller: 'ClubAccountCtrl'
        })
        .state('sellerRegister', {
          url: '/register',
          templateUrl: 'template/register.html',
          controller: 'ClubAccountCtrl'
        })
        .state('club-new.main', {
          url: '/main',
          views: {
            content: {
              controller: 'ClubCtrl',
              templateUrl: 'template/overview.html'
            }
          }
        })
        .state('club-new.manage-activity', {
          url: '/manage-activity',
          views: {
            content: {
              controller: 'ClubActivityCtrl',
              templateUrl: 'template/manage-activity.html'
            }
          }
        })
        // .state('sellerRegister1', {
        //   url: '/register1',
        //   templateUrl: 'templates/register1.html',
        //   controller: 'mylogin'
        // })
        //
        //
        // .state('club.manage', {
        //   url: '/manage',
        //   views: {
        //     content: {
        //       controller: 'ManageClubsCtrl',
        //       templateUrl: 'templates/list.html'
        //     }
        //   }
        // })
        //
        // .state('club.edit', {
        //   url: '/edit/:id',
        //   views: {
        //     content: {
        //       controller: 'EditClubCtrl',
        //       templateUrl: 'templates/edit.html'
        //     }
        //   }
        // })
        //
        // .state('club.reports', {
        //   url: '/reports',
        //   views: {
        //     content: {
        //       templateUrl: 'templates/reports.html'
        //     }
        //   }
        // })
        //
        // .state('club.accounting', {
        //   url: '/account',
        //   views: {
        //     content: {
        //       controller: 'AccountingCtrl',
        //       templateUrl: 'templates/accounting.html'
        //     }
        //   }
        // })
        //
        // .state('club.sales', {
        //   url: '/sales',
        //   views: {
        //     content: {
        //       controller: 'SalesCtrl',
        //       templateUrl: 'templates/sales.html'
        //     }
        //   }
        // })
        //
        // .state('club.settings', {
        //   url: '/settings',
        //   views: {
        //     content: {
        //       controller: 'SettingsCtrl',
        //       templateUrl: 'templates/settings.html'
        //     }
        //   }
        // });

      $urlRouterProvider.otherwise('/login');

    }]);
