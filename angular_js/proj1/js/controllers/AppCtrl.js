//scope 
angular.module('app').controller('AppCtrl',['$scope','itemTypeService', function($scope, itemTypeService){
   
    //alert("hello");
    $scope.person = {
        
    'name':"john doe"
    };
    
//    $scope.itemTypes = ['home','Electronics','gaming','cell','Appliances','computers'];
//   
    console.log(itemTypeService.itemTypes);
    $scope.itemTypes = itemTypeService.itemTypes;
}]);