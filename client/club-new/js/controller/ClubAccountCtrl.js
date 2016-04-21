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
                    $scope.credentials.realm = 'clubowner';
                    Customer.login({rememberMe: $scope.rememberMe}, $scope.credentials, function ()
                    {
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
                        // $translate('LOGIN_ERROR_GENERIC').then(function (translation)
                        // {
                        //     //console.log(translation);
                        //     Message.error(translation);
                        // });
                    });
                };

                $scope.fd = {};
                //console.log($scope.register);

                $scope.registerNow = function ()
                {
                    $scope.fd.realm = 'clubowner';
                    $scope.fd.credentials = {"passwd" : $scope.fd.password};
                   
                    Customer.create($scope.fd, function ()
                    {
                        $('.regsuc').toggle();
                        $('.regsuc').html('Verification link sent to your email address.<br/>Verify that link for signin.');
                        setTimeout(function(){
                            $state.go('clubLogin');
                        },
                        6000);

                        // $translate('REGISTER_SUCCESS').then(function (translation)
                        // {
                        //     Message.success(translation).then(function ()
                        //     {
                        //         $state.go('clubLogin');
                        //     });
                        // });

                    }, function (err)
                    {
                       $('.regerr').toggle();
                       $(".regerr").html("Unprocessable Entity.");
                       setTimeout(function()
                       {
                         $('.regerr').toggle();
                         $(".regerr").html('');
                       },3000);
                        // var errorCode = 'GENERIC';
                        //
                        // switch (err.data.error.status)
                        // {
                        //
                        //     case 422:
                        //         errorCode = 'INVALID_DATA';
                        //         break;
                        //
                        // }
                        //
                        // $translate('REGISTER_ERROR_' + errorCode).then(function (translation)
                        // {
                        //     $log.log(err);
                        //
                        //     Message.error(translation);
                        // });

                    });

                };

            }
        ]);
