angular.module("com.airspott.shop").controller("ShopAppCtrl", ["$rootScope", '$scope', '$state', '$log', 'Buyer', 
    function ($rootScope, $scope, $state, $log, Buyer) {

        $rootScope.countries = ['AT', 'DE', 'CH'];
        $rootScope.saleUnits = ['DAYS', 'HOURS'];
        $rootScope.languages = ['DE', 'EN'];

        $rootScope.meta = {
          title: 'APP_NAME'
        };

        /*if (!Buyer.isAuthenticated()) {
          $rootScope.user = Buyer.getCurrent(function (user) {

          }, function (err) {

          });

          return;
        }*/

        $rootScope.meta = {
          title: 'APP_NAME'
        };

        $scope.logout = function () {
          Buyer.logout(function () {
            $state.go('shop.logout');
          });
        };

        $scope.transitTo = function (state, params) {
          $state.go(state, params);
        };
        
        $scope.search = function(){            
            
            $state.go('shop.search');
        }

    }]);
