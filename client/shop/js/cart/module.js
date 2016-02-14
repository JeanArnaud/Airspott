/**
 * Set-up the cart module for shop
 * Contains all cart and checkout related things (payment page, cart)
 * @ng-module: com.airspott.shop.cart
 */
angular.module('com.airspott.shop.cart', [])
  .config([
    "$stateProvider",

    function ($stateProvider) {

      'use strict';

      $stateProvider

        .state('shop.cart', {
          url: '/cart',
          views: {
            content: {
              controller: 'ShopCartCtrl',
              templateUrl: 'templates/cart/cart.html'
            }
          }
        })

        .state('shop.checkout', {
          url: '/cart/checkout',

          views: {
            content: {
              controller: 'CheckoutCtrl',
              templateUrl: 'templates/cart/checkout.html'
            }
          }
        });

    }]);
