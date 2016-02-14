/**
 * Set-up the product module for shop
 * Contains all product related things (product details, categories)
 * @ng-module: com.airspott.shop.product
 */
angular.module('com.airspott.shop.product', [])
  .config([
    "$stateProvider",

    function ($stateProvider) {

      'use strict';

      $stateProvider

        .state('shop.product', {
          url: '/product',
          views: {
            content: {
              controller: 'ShopProductCtrl',
              templateUrl: 'templates/product/product.html'
            }
          }
        })

        .state('shop.productDetails', {
          url: '/product/:productId',

          views: {
            content: {
              controller: 'ProductDetailsCtrl',
              templateUrl: 'templates/product/details.html'
            }
          }
        });

    }]);
