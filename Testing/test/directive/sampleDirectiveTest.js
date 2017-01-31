describe("sampleDirectiveTest Cases", function(){
   beforeEach(angular.mock.module('unitTest'));
    var element, scope;
    
    beforeEach(inject(function($rootScope, $compile){
        element = angular.element('<sample-dir></sample-dir>');
        scope = $rootScope.$new();
        $compile(element)(scope);
        $scope.$digest();
        scope.firstNum = 2;
        scope.SecondNum = 3;
        scope.submit();
    }));
    
    it("test for first num",function(){
       expect(scope.firstNum).toBe(2); 
    });
    
//     it("test for second num",function(){
//       expect(scope.SecondNum).toBe(3); 
//    });
//    
//     it("test for add",function(){
//       expect(scope.add).toBe(5); 
//    });
//    
//     it("test for multiply",function(){
//       expect(scope.multiply).toBe(6); 
//    });
    
    
    
   });