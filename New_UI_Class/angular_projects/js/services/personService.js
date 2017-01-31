angular.module("appName").service("personService",[function(){
    this.personObj={
        firstName:"",
        lastName:"",
        address:"",
        phoneNumber:""
    }
    
    this.addPerson=addPerson;
    
    this.personArray=[
            {
                firstName:"John",
                lastName:"Doe",
                phoneNumber:"123-123-1234",
                address:"xyz lane"
            },
            {
                firstName:"John",
                lastName:"Cena",
                phoneNumber:"111-111-1111",
                address:"You cant see me lane"
            },
            {
                firstName:"George",
                lastName:"Harrison",
                phoneNumber:"444-444-4444",
                address:"Abbey lane"
            },
            {
                firstName:"Steven",
                lastName:"Colvert",
                phoneNumber:"999-999-9999",
                address:"New York Avenue"
            },{
                firstName:"Donald",
                lastName:"Trump",
                phoneNumber:"666-666-6666",
                address:"Jackass lane"
            }
    ];
    this.getElement = function(index){
        var length = this.personArray.length;
        if (index<length){
            console.log(this.personArray[index].firstName);
        }
    }
    var that=this;
    
    this.test=function(){
        console.log("from clouser")
        console.log(this.personObj);
    }
   
    function addPerson(){
        this.personObj="random";
        console.log(that.personObj);
        var tempPersonObj = {
                firstName:that.personObj.firstName,
                lastName:that.personObj.lastName,
                address:that.personObj.address,
                phoneNumber:that.personObj.phoneNumber
        }
        that.personArray.push(tempPersonObj);
             
    }
}]);