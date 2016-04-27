angular.module('com.airspott.club')
    .controller('mylogin',
        [
            '$rootScope', '$scope', '$log', '$state', '$location', '$translate', 'Customer', 'Message',

            function ($rootScope, $scope, $log, $state, $location, $translate, Customer, Message)
            {
                $scope.title = "CLUB_LOGIN";

                $scope.credentials = {};
                $scope.rememberMe = true;

                $scope.login = function ()
                {
                    // Customer.deleteById({"id":"57089dd9b59396034f006527"},function(err,data)
                    // {
                    //     if(err)
                    //       console.log(err);
                    //
                    //       console.log(data);
                    //
                    // });
                    Customer.login({rememberMe: $scope.rememberMe}, $scope.credentials, function (data)
                    {
                        console.log("Login Info = "+JSON.stringify(data));
                        var next = $location.nextAfterLogin || '/main';
                        $location.nextAfterLogin = null;
                        $location.path(next);
                    }, function (err)
                    {
                        $translate('LOGIN_ERROR_GENERIC').then(function (translation)
                        {
                            Message.error(translation);
                        });
                    });
                };

                $scope.register = {};

                $scope.registerNow = function ()
                {

                    Customer.create($scope.register, function ()
                    {
                       console.log($scope.register);
                        $translate('REGISTER_SUCCESS').then(function (translation)
                        {
                            Message.success(translation).then(function ()
                            {
                                $state.go('club1Login');
                            });
                        });

                    }, function (err)
                    {
                      console.log('not register');
                        var errorCode = 'GENERIC';

                        switch (err.data.error.status)
                        {

                            case 422:
                                errorCode = 'INVALID_DATA';
                                break;

                        }

                        $translate('REGISTER_ERROR_' + errorCode).then(function (translation)
                        {
                            $log.log(err);

                            Message.error(translation);
                        });

                    });

                };

            }
        ]);
