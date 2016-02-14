angular.module('com.airspott.shop.search').controller('SearchCtrl', ["$rootScope", "$scope", "$state", "Club", 
    function ($rootScope, $scope, $state, Club) {

    $rootScope.meta.title = "SEARCH";
    $scope.obj = {};
    $scope.search_obj.fit_type = [];
    
    $scope.$on('$viewContentLoaded', function(event) {        
        
    });
    
    $scope.search = function(search_obj){
        
        Club.find({where: {and: [
                            {location: search_obj.location},
                            {guests: search_obj.guests},
                            {checkin: search_obj.checkin},
                            {checkout: search_obj.checkout},
                            {fit_type: search_obj.fit_type}
                        ]}
            }, function (clubs){
                $rootScope.clubs = clubs;
                $rootScope.obj = search_obj;
                $state.go('shop.search');
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