angular.module("com.airspott.club")
    .controller("ClubAppCtrl",
        ["$rootScope", '$scope', '$state', '$log', 'Customer',

         function ($rootScope, $scope, $state, $log, Customer)
         {

             $rootScope.countries = ['AT', 'DE', 'CH'];
             $rootScope.saleUnits = ['DAYS', 'HOURS'];

             //@todo check if user is an owner (club user role!)
             if (!Customer.isAuthenticated())
             {
                 $state.go('clubLogin');

                 return;
             }

             $rootScope.meta = {
                 title: 'APP_NAME'
             };

             $scope.bottomBarAction = function (action)
             {
                 $rootScope.$broadcast(action + 'Action');
             };

             $scope.logout = function ()
             {
                 Customer.logout(function ()
                 {
                     $state.go('clubLogin');
                 });
             };

             $scope.transitTo = function (state, params)
             {
                 $state.go(state, params);
             };

             $rootScope.user = Customer.getCurrent(function (user)
             {

             }, function (err)
             {

             });


             Customer.ownerAccount({id: Customer.getCurrentId()}, function (ownerAccount)
             {
                 $rootScope.ownerAccount = ownerAccount;
             }, function (err)
             {
                 if (err.status = 404) $rootScope.ownerAccount = false;
             });

         }]);