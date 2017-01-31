angular.module("appName").factory("personFactory",[function(){
    var x=12;
    
    return {
        getX:function(){
            return x;
        },
        addPerson:function(){
//            var personObj = {
//                firstName:$scope.personModel.firstName,
//                lastName:$scope.personModel.lastName,
//                address:$scope.personModel.address,
//                phoneNumber:$scope.personModel.phoneNumber
//              }
              personFactory.personArray.push(personObj);
             
        },
        personArray:[
            {
                firstName:"Alberto",
                lastName:"Gonzaliz",
                phoneNumber:"123-123-1234",
                address:"xyz lane"
            },
            {
                firstName:"Anthoney",
                lastName:"Martial",
                phoneNumber:"111-111-1111",
                address:"You cant see me lane"
            },
            {
                firstName:"Wayne",
                lastName:"Rooney",
                phoneNumber:"444-444-4444",
                address:"Abbey lane"
            },
            {
                firstName:"Steven",
                lastName:"Gerrard",
                phoneNumber:"999-999-9999",
                address:"New York Avenue"
            },{
                firstName:"Hilary",
                lastName:"Clinton",
                phoneNumber:"666-666-6666",
                address:"Jackass lane"
            }
        ],
        getElement:function(index){
            var length = this.personArray.length;
            if (index<length){
                console.log(this.personArray[index].firstName);
            }
        }
    }
    
}]);