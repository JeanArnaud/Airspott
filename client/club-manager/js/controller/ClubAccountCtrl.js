angular.module('com.airspott.club')
    .controller('ClubAccountCtrl',
        [
            '$rootScope', '$scope', '$log', '$state', '$location', '$translate', 'Customer', 'Message',

            function ($rootScope, $scope, $log, $state, $location, $translate, Customer, Message)
            {
                //$rootScope.meta.title = "CLUB_LOGIN";

                $scope.credentials = {};
                $scope.rememberMe = true;
                $scope.agreement = '';

                $scope.login = function ()
                {
                    $scope.credentials.realm = 'clubmanager';
                    Customer.login({rememberMe: $scope.rememberMe}, $scope.credentials, function (data)
                    {
                        localStorage.setItem("token",data.id);
                        var next = $location.nextAfterLogin || '/main';
                        $location.nextAfterLogin = null;
                        $location.path(next);
                    }, function (err)
                    {
                        $(".err").toggle();
                        $('.err').html('Login Failed please check your Credential.');
                        setTimeout(function()
                        {
                            $(".err").toggle();
                            $('.err').html('');
                        },3000);
                        
                    });
                };

                $scope.fd = {};
                //console.log($scope.register);

            }
        ]);
