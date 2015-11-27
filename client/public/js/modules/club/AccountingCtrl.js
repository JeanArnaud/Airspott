angular.module('com.airspott.club')
    .controller('AccountingCtrl',
        [
            '$rootScope', '$scope', '$state', 'Customer', 'OwnerAccount', 'Message',

            function ($rootScope, $scope, $state, Customer, OwnerAccount, Message)
            {

                $rootScope.meta.title = "ACCOUNTING";

                $scope.save = function ()
                {

                    Customer.ownerAccount({id: Customer.getCurrentId()}, function ()
                    {

                        OwnerAccount.upsert($scope.ownerAccount, function (ownerAccount)
                        {

                            $rootScope.ownerAccount = ownerAccount;

                            Message.success('SUCCESS_SAVING_OWNER_ACCOUNT');

                            $state.go('club.main');

                        }, function (err)
                        {
                            Message.error('ERROR_SAVING_OWNER_ACCOUNT');
                        });

                    }, function (err)
                    {
                        if (err.status = 404)
                        {
                            Customer.ownerAccount.create({id: Customer.getCurrentId()}, $scope.ownerAccount, function (ownerAccount)
                            {

                                $rootScope.ownerAccount = ownerAccount;

                                Message.success('SUCCESS_SAVING_OWNER_ACCOUNT');

                                $state.go('club.main');
                            }, function (err)
                            {
                                Message.error('ERROR_SAVING_OWNER_ACCOUNT');
                            });
                        }
                    });
                };

            }
        ]);