    describe("test ctrl", function(){

        beforeEach(angular.mock.module('sampleApp'));

        beforeEach(angular.mock.inject(function(_$controller_, $rootScope){
            $controller = _$controller_;
            $scope = $rootScope.$new();
            var controller = $controller('sampleEmpCtrl',{
                $scope: $scope
            });

            
        

        }));
        
        it("last name should be doe by default", function(){
            expect($scope.lastname).toBe("Doe");
        });

         it("last name should be doe by default", function(){
            expect($scope.firstname).toBe("John");
        });
    })