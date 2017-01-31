angular.module('app').controller('ShopCtrl', ["$scope", "$http", function($scope,$http){
    alert("comming from hhtp shopping cart controller");
    
    $scope.contents = "Hello World";
    
    //calling customer service with id 2
    $http.get("/service/customer/2").then(function(response){
        console.log("logging just the response");
        console.log(response);
        console.log("end of response");
        console.contents = response.data;
        console.log($scope.contents);
    });
}]);