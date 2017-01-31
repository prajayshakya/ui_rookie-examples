'use strict';
describe("Directive Test sample cases: ",function(){
    beforeEach(angular.mock.module('sampleApp'));
    beforeEach(angular.mock.module('testModule'));
    
    var element, scope;
    
    beforeEach(inject(function($rootScope, $compile){
        element = angular.element("<sample-emp-dir></sample-emp-dir>");
        scope = $rootScope.$new();
        $compile(element)(scope);
        
        scope.$digest();
        
        console.log(element);
        
        
    }));
    
    it("test for header value",function(){
        expect(element.find('h1').html()).toBe('Testing For Directive');
    });
    
    it("test for span value", function(){
      expect(element.find("span").html()).toBe("HelloWorld");  
    })
});