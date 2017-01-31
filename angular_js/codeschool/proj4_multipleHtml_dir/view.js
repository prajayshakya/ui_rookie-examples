angular.module("myModule",[]).controller("myController",function($scope){
   var models = [
       {name:"Angelina Jolie", likes:0, dislikes:0},
        {name:"Scarlet Johnson", likes:0, dislikes:0},
        {name:"Megan fox", likes:0, dislikes:0},
        {name:"Emma Stone", likes:0, dislikes:0},
        {name:"Jessica Alba", likes:0, dislikes:0},  
                ]; 
    $scope.models = models;
    
    $scope.selectType= "view1.html";
    
    });