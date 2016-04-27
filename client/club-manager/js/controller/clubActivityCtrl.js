angular.module('com.airspott.club')
    .controller('ClubActivityCtrl', function($scope, $rootScope, Offer, $http, $state, $stateParams)
    {
        $rootScope.meta.title = 'MANAGE_ACTIVITY';
        $scope.offers = Offer.find(function(data)
            {
                if(typeof($stateParams.id) != 'undefined')
                {
                    $scope.newActivity = $scope.offers[$stateParams.id];
                }         
            });
        $scope.newActivity = {};
        $scope.pageSize=10;
        $scope.currentPage=1;

       
        // Add new Activity
        $scope.addActivity = function()
        {
            if(typeof($scope.newActivity.offerId) != 'undefined')
            {
               if($scope.newActivity.offerId != '')
               {
                  $scope.newActivity.parent = $('.parent option:selected').text();
               }
               else
               {
                 $scope.newActivity.parent = '';
               }
            }
            Offer.create($scope.newActivity, function(data)
            {
                $scope.offers.push(data);
                $scope.newActivity = {};
                $state.go('club-new.manage-activity');
                //$("#myModal").modal('hide');
            },
            function(err)
            {
                console.log(err);
            });
        }

        // Delete Activity
        $scope.deleteActivity = function(data)
        {
            if(confirm('Want to delete?'))
            {
                var index = $scope.offers.indexOf(data);
              //  console.log(typeof(data.parent));
                if(typeof(data.parent) != 'undefined')
                {
                    Offer.deleteById({"id":data.id}, function(response)
                    {
                        if(response.count == 1)
                        {
                            $scope.offers.splice(index, 1);
                        }
                    },
                    function(err)
                    {
                        console.log(err);
                    });
                }
                else
                {
                    $http.delete('/api/Offers/'+data.id+'/suboffers').success(function(response)
                    {
                        Offer.delete({'id':data.id},function(res)
                        {
                            if(res.count == 1)
                            {
                                $scope.offers = Offer.find();
                            }
                        });
                    });
                }

            }
        }

        // Update Existing Activity
        $scope.upateActivity = function()
        {
            $scope.newActivity.parent = $('.editparent option:selected').text();
            $scope.newActivity.$save();
            $state.go('club-new.manage-activity');
            $scope.newActivity = {};
        }
    });
