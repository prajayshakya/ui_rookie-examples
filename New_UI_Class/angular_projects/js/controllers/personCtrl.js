"use strict";
angular.module("appName")
    .controller("personCtrl",["$scope","personService",function($scope,personService){
        $scope.tests="sample";
        //Creating model for person form
        $scope.personModel = {
            firstName:"",
            lastName:"",
            address:"",
            phoneNumber:""
        };
        
        personService.personObj = $scope.personModel;
        $scope.personArray=personService.personArray;
        
        $scope.forNgShow = true;
        $scope.forNgIf =true;
        
        $scope.toggleForShow = function(){
            $scope.forNgShow = !$scope.forNgShow;
        }
        
        $scope.toggleForIf = function(){
             $scope.forNgIf = !$scope.forNgIf;
        }
//        $scope.personModel.firstName="John";
//        $scope.personModel.lastName="Doe";
//        $scope.personModel.address="Some Address";
//        $scope.personModel.phoneNumber="123-123-1234";
//        
        $scope.personTable={
            sortBy:'firstName',
            sortOrder:false,
            toggleOrder:function(name){
                if($scope.personTable.sortBy!=name){
                    $scope.personTable.sortOrder=false;
                    $scope.personTable.sortBy=name;
                }
                else{
                    
                    $scope.personTable.sortOrder = !$scope.personTable.sortOrder;
    
                }
            }
        }
         $scope.personForm={
              addPerson:personService.addPerson
          };
    }]);