angular.module("com.airspott.club")
    .controller("ClubAppCtrl",
    ["$rootScope", '$scope', '$state',

     function ($rootScope, $scope, $state)
     {

         $rootScope.meta = {
             title: 'APP_NAME'
         };

         $scope.bottomBarAction = function (action)
         {
             $rootScope.$broadcast(action + 'Action');
         };

         $scope.logout = function ()
         {
             alert("logout");
         };

         $scope.transitTo = function (state, params)
         {
             $state.go(state, params);
         };
     }

    ]);