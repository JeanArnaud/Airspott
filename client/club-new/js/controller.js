angular.module("com.airspott.club")
    .controller("ClubAppCtrl",
        ["$rootScope", '$scope', '$state', '$log', 'Customer', '$location',

         function ($rootScope, $scope, $state, $log, Customer, $location)
         {

             $rootScope.countries = ['Osterreich', 'Deutschland', 'Schweiz'];
             $rootScope.saleUnits = ['DAYS', 'HOURS'];
             $rootScope.languages = ['DE', 'EN'];

             //@todo check if user is an owner (club user role!)
             if (!Customer.isAuthenticated())
             {
                 $state.go('clubLogin');

                 return;
             }

             $scope.toggleMenu = function()
             {
                console.log('menu clicked');
                //$('#wrapper').toggle('slide','left');
             }
             $rootScope.meta = {
                 title: 'Airspott'
             };
             //$rootScope.meta.title = 'Airspott';

             $scope.activeLink = function(name)
             {
                    if($location.path() == name)
                    {
                        return 'active';
                    }
                    else
                    {
                        return '';
                    }
             }
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
                 if (err.status = 404)
                 {
                     $rootScope.ownerAccount = {};
                     $rootScope.needsNewOwnerAccount = true;
                 }
             });

         }]);