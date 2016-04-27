angular.module('com.airspott.club')
    .controller('ClubManagerCtrl',
    	[
		 '$rootScope', '$scope', '$location','Club','Customer' ,'$http', '$stateParams', '$state','$compile',

        	function ($rootScope, $scope, $location, Club, Customer, $http, $stateParams, $state, $compile)
      	    {
      	    	$scope.pageSize = 10;
      	    	$scope.currentPage = 1;
    			$scope.managers = Club.find({filter : {where : {customerId : Customer.getCurrentId()}}}, function(club)
    				{
    					if($stateParams.id && $stateParams.id != '')
		    			{
		    				$scope.managerDetail = club[$stateParams.id];
		    				console.log($scope.managerDetail);
		    			}
    				});
    			// Update manager Information
    			$scope.updateManager = function()
    			{
    				$scope.managerDetail.$save();
    				$state.go("club-new.club-manager");
    			}
    			//Remove Manager from Club
    			$scope.deleteManager = function(k)
    			{
    				if(confirm("Want to delete?"))
    				{
    		// 			$scope.data = $scope.managers[k];
    					
						// $scope.data.responsibleFname = '';
						// $scope.data.responsibleLname = '';
						// $scope.data.responsibleTel = '';
						// $scope.data.email = '';
						// $scope.data.managerId = '';
						// $scope.data.$save();
						
    					// $scope.managers.splice(k, 1);
    				}
    			}
    		}
    	]);