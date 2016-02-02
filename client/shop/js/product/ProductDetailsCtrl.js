angular.module('com.airspott.shop.product')

  .controller('ProductDetailsCtrl',
    ["$rootScope",
      function ($rootScope) {

        $rootScope.meta.title = "PRODUCT_DETAILS";

      }]);
