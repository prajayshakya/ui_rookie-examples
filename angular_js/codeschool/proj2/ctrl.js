angular.module('demo',[])
        .controller('myCtrl', ['$scope','itemService',function($scope,itemService){
                
                
                $scope.display = itemService.display;
                          }]);