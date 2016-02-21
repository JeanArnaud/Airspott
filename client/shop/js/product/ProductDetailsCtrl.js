angular.module('com.airspott.shop.product').controller('ProductDetailsCtrl', [

    "$rootScope", "$scope", "$state", "$log", "Club",

    function ($rootScope, $scope, $state, $log, Club) {

        $rootScope.meta.title = "PRODUCT_DETAILS";

        $log.log($state);

        $scope.product = Club.findById({
            id: $state.params.productId,
            filter: {
                include: ['address', 'media']
            }
        });

    }]);
