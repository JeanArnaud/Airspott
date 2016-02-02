angular.module('com.airspott.shop.cart')
  .controller('CheckoutCtrl', ["$rootScope", "$scope",
    function ($rootScope, $scope) {

      'use strict';

      $rootScope.meta.title = "CHECKOUT";

      $scope.checkoutStep = 0;

      $scope.next = function () {
        $scope.checkoutStep++;
      };

      $scope.back = function () {
        $scope.checkoutStep--;
      };


    }]);
