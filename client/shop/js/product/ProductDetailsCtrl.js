angular.module('com.airspott.shop.product').controller('ProductDetailsCtrl', [

    "$rootScope", "$scope", "$state", "$log", "Club",

    function ($rootScope, $scope, $state, $log, Club) {

        $rootScope.meta.title = "PRODUCT_DETAILS";

        $scope.cartItem = {
            amount: 1,
            persons: [{name: null, email: null}]
        };

        $scope.product = Club.findById({
            id: $state.params.productId,
            filter: {
                include: ['address', 'media']
            }
        }, function (product) {
            $scope.mapSettings = {
                center: {
                    lat: product.address.latLon.lat,
                    lng: product.address.latLon.lng,
                    zoom: 12
                },
                markers: {
                    main: {
                        lat: product.address.latLon.lat,
                        lng: product.address.latLon.lng,
                        focus: true,
                        message: product.name,
                        draggable: false
                    }
                }
            };
        });

        $scope.changeAmount = function () {

            var diff = $scope.cartItem.amount - $scope.cartItem.persons.length;

            if (diff > 0) {
                while (diff--) {
                    $scope.cartItem.persons.push({name: null, email: null});
                }
            }
            else if (diff < 0) {
                diff = diff * -1;

                while (diff--) {
                    $scope.cartItem.persons.pop();
                }
            }

        };

        $scope.getNumber = function (number) {
            return new Array(number);
        };

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

            for (var i = 0; i < $scope.cartItem.persons.length; i++) {
                var cartItem = angular.extend({pseudoID: guid()}, $scope.cartItem.persons[i], {product: $scope.product});

                $rootScope.addToCart(cartItem);
            }

            $state.go('shop.cart');
        };

    }]);
