"use strict";
angular.module("appName")
    .controller("appCtrl",["$scope",function($scope){
            $scope.xyz = 12;
            $scope.header="Hello World";
            var that=this;
            $scope.test=function(){
               // this.header = "changed";
                var x=function(){
                    $scope.header="OH look it changed";
                    $scope.footer = "added from function x"
                }
                x();
            }   
    
        
    }]);