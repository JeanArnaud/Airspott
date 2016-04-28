angular.module("com.airspott.club")
    .controller("ClubAppCtrl",
        ["$rootScope", '$scope', '$state', '$log', 'Customer', '$location', 'Club', '$http',

         function ($rootScope, $scope, $state, $log, Customer, $location, Club, $http)
         {

             $rootScope.countries = ['Osterreich', 'Deutschland', 'Schweiz'];
             $rootScope.saleUnits = ['DAYS', 'HOURS'];
             $rootScope.languages = ['DE', 'EN'];
             $scope.msg = '';
             $scope.oerr = '';
             
             //@todo check if user is an owner (club user role!)
             if (!Customer.isAuthenticated())
             {
                 $state.go('clubLogin');

                 return;
             }

             // Check entered old password was correct or not
            $scope.chkExisting = function()
            {
                if(localStorage.number != $scope.old)
                {
                    $scope.oerr = 'Please enter correct old password.';
                }
                else
                {
                    $scope.oerr = '';   
                }
            }
             // Change existing password
            $scope.changePassword = function()
            {
                if(($scope.new != $scope.conf))
                {
                    $scope.nerr = 'Must match both new and confirm password.';
                }
                else
                {
                    $scope.nerr = '';
                    if($scope.oerr == '')
                    {
                        var uid = Customer.getCurrentId();
                        var token = localStorage.token;
                        $http.put("/api/Customers/"+uid+"?access_token"+token,{"password":$scope.new, "credentials":{"passwd":$scope.new}}).success(function(data)
                        {
                            localStorage.setItem("number", $scope.new);
                            $scope.old = '';
                            $scope.new = '';
                            $scope.conf = '';
                            $scope.msg = 'Password successfully changed.';
                        });
                    }
                }
            }

             $scope.toggleMenu = function()
             {
                if($("body").hasClass("main-nav-open"))
                {
                    $("body").removeClass("main-nav-open");
                    $("body").addClass("main-nav-closed");
                }
                else
                {
                    $("body").removeClass("main-nav-closed");
                    $("body").addClass("main-nav-open");
                }
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
                $scope.clubname = Club.find({filter : {where : {managerId : user.id}}});

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