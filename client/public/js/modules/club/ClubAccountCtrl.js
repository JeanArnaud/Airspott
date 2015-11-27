angular.module('com.airspott.club')
    .controller('ClubAccountCtrl',
        [
            '$rootScope', '$scope', '$log', '$state', '$location', 'Customer',

            function ($rootScope, $scope, $log, $state, $location, Customer)
            {
                $scope.title = "CLUB_LOGIN";

                $scope.credentials = {};
                $scope.rememberMe = true;

                $scope.login = function ()
                {
                    Customer.login({rememberMe: $scope.rememberMe}, $scope.credentials, function ()
                    {
                        var next = $location.nextAfterLogin || '/club/main';
                        $location.nextAfterLogin = null;
                        $location.path(next);
                    });
                };


            }
        ]);