describe("Test for person service",function(){
    
    var sampleEmpService;
    beforeEach(function(){
        angular.mock.module('sampleApp');
        inject(function(_sampleEmpService_){
            sampleEmpService = _sampleEmpService_;
        });
    });
    
    
    it("getFirstName should be a function",function(){
       expect(typeof(sampleEmpService.getFirstName)).toBe("function");
        
    });
    
    it("getLastName should be a function",function(){
       expect(typeof(sampleEmpService.getLastName)).toBe("function");
        
    });
    
    it("setFirstName should be a function",function(){
       expect(typeof(sampleEmpService.setFirstName)).toBe("function");
        
    });
    it("setLastName should be a function",function(){
       expect(typeof(sampleEmpService.setLastName)).toBe("function");
        
    });
    
    it("last name should be doe by default", function(){
        expect(sampleEmpService.getLastName()).toBe("Doe");
    });
    
     it("last name should be doe by default", function(){
        expect(sampleEmpService.getFirstName()).toBe("John");
    });
    
    it("should update the first and last name",function(){
        sampleEmpService.setFirstName("George");
        sampleEmpService.setLastName("Washington");
        expect(sampleEmpService.getFirstName()).toBe("George");
        expect(sampleEmpService.getLastName()).toBe("Washington");
        
    });
    
    
    
});