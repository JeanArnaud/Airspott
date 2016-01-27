angular.module('com.airspott.shop.search').controller('SearchCtrl', ["$rootScope", "$scope", "$state", 
    function ($rootScope, $scope, $state) {

    $rootScope.meta.title = "SEARCH";
    $scope.obj = {};
    
    $scope.$on('$viewContentLoaded', function(event) {        
        $scope.clubs = $state.current.data;        
    });
    
    $scope.search = function(obj){
        
        console.log(obj);        
        
        Club.find({where: {and: [{location: obj.location}, {guests: obj.guests}, {checkin: obj.checkin}, {checkout: obj.checkout}, {fit_type: obj.fit_type}]}}, 
            function (err, clubs) {                    
                $state.get('shop.search').data = clubs;
                $state.go('shop.search');                        
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