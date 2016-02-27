angular.module('com.airspott.shop.product').controller('ProductDetailsCtrl', [

    "$rootScope", "$scope", "$state", "$log", "Club",

    function ($rootScope, $scope, $state, $log, Club) {

        $rootScope.meta.title = "PRODUCT_DETAILS";

        $scope.cartItem = {
            amount: 1
        };

        $scope.product = Club.findById({
            id: $state.params.productId,
            filter: {
                include: ['address', 'media']
            }
        });

        $scope.addToCart = function () {
            var cartItem = angular.extend({}, $scope.cartItem, $scope.product);

            $rootScope.addToCart(cartItem);

            $state.go('shop.cart');
        };

    }]);
