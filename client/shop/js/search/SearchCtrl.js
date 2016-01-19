angular.module('com.airspott.shop.search').controller('SearchCtrl', ["$rootScope", "$scope", 
    function ($rootScope, $scope) {

    $rootScope.meta.title = "SEARCH";
    
    $scope.$on('$viewContentLoaded', function(event) {
        
        alert(angular.element("#count").val());
        
        var doMinus = function() {
            if (document.getElementById("count").value > 1)
                document.getElementById("count").value = --document.getElementById("count").value;
        }

        var doPlus = function() {
            document.getElementById("count").value = ++document.getElementById("count").value;
        }
        
    });

}]);