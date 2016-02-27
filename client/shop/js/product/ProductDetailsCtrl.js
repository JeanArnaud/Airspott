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

            var guid = function () {
                function s4() {
                    return Math.floor((1 + Math.random()) * 0x10000)
                        .toString(16)
                        .substring(1);
                }

                return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                    s4() + '-' + s4() + s4() + s4();
            };

            for (var i = $scope.cartItem.amount; i > 0; i--) {
                var cartItem = angular.extend({pseudoID: guid()}, {product: $scope.product});

                $rootScope.addToCart(cartItem);
            }

            $state.go('shop.cart');
        };

    }]);
