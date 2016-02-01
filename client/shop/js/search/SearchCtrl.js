angular.module('com.airspott.shop.search').controller('SearchCtrl', ["$rootScope", "$scope", "$state", "Club", 
    function ($rootScope, $scope, $state, Club) {

    $rootScope.meta.title = "SEARCH";
    $scope.obj = {};    
    
    $scope.$on('$viewContentLoaded', function(event) {        
        if($state.current.data)
        {
            $scope.clubs = JSON.parse($state.current.data);
            $scope.obj = JSON.parse($state.current.search_obj);
            $scope.obj.fit_type = [];
        }
        else
            $scope.clubs = {};
    });
    
    $scope.search = function(obj){
        
        Club.find({where: {and: [
                            {location: obj.location},
                            {guests: obj.guests},
                            {checkin: obj.checkin},
                            {checkout: obj.checkout},
                            {fit_type: obj.fit_type}
                        ]}
            }, function (clubs){
                $scope.clubs = clubs;
            }, function (err){
                throw err; // do whatever necessary with the error object
            });
    }
    
    $scope.doMinus = function(obj){
            
        if(obj.guests > 1)
            --obj.guests;
    }
        
    $scope.doPlus = function(obj){

        obj.guests++;            
    }

}]);