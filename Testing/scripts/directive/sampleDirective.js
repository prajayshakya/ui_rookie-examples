angular.module('unitTest').directive('sampleDir', function(){
   return{
       restrict: "EA",  
       template: "<h3> Hello world </h3>",
       link:function($scope){
           //alert($scope.title);
          
           var calculator = function(){
               var num1=0;
               var num2=0;
               //setter function
               this.setNum1 = function(param){
                   num1 = parseInt(param);
               }
               this.setNum2 = function(param){
                   num2 = parseInt(param);
               }
               // getter function
               this.getNum1 = function(){
                   return num1;
               }
               this.getNum2 = function(){
                   return num2;
               }
               //calculating function
               this.add = function(){
                   return num1 + num2;
               }
               
               this.multiply = function(){
                    return num1*num2;
               }
               
               this.divide = function(){
                   return num1/num2;
               }
               
               
           }
           
            $scope.submit = function(){
                   //alert("submit");
                   var calcObj = new calculator();
                   calcObj.setNum1($scope.firstNum);
                   calcObj.setNum2($scope.SecondNum);
                   
                   //alert($scope.firstNum);
                   //alert($scope.SecondNum);
                   
                   $scope.add=calcObj.add();
                   $scope.multiply = calcObj.multiply();
                   $scope.divide = calcObj.divide();
               }
       }
   } 
});
