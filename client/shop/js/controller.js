angular.module("com.airspott.shop").controller("ShopAppCtrl", ["$rootScope", '$scope', '$state', '$log', 'Buyer', 'Club', 
    function ($rootScope, $scope, $state, $log, Buyer, Club) {

        $rootScope.countries = ['AT', 'DE', 'CH'];
        $rootScope.saleUnits = ['DAYS', 'HOURS'];
        $rootScope.languages = ['DE', 'EN'];
        $scope.obj = {};

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
        
        $scope.search = function(obj){
            
            Club.find({where: {and: [{location: obj.location}, {guests: obj.guests}, {checkin: obj.checkin}, {checkout: obj.checkout}, {fit_type: obj.fit_type}]}}, 
                function (err, clubs) {                    
                    $state.get('shop.search').data = clubs;
                    $state.go('shop.search');                        
            });
        }
        
        $scope.doMinus = function(obj){            
            
            if(obj.guests > 1)
                --obj.guests;
        }
        
        $scope.doPlus = function(obj){
            
            obj.guests++;            
        }
        
    }]);
