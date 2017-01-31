'use strict';

//json is a key value pairing 

var person = {
    firstname: "john",
    lastname: "Doe",
    address: "123 xyz",
    dob: "12-04-1991",
    test:function(){
        console.log("test function");
    },
    test2:outside,
    
    sampleObj:{
        accountNo:123,
        balance:"NA",
        
        complexArray:[
                {
                    
                fruit:"apple",
                pet: "Dog"    
                    
                },
                
                {
                    fruit:"Mango",
                    pet:"Cat"
                }
        ]
    }, 
    
    cars:["toyota","honda"]

};

function outside(){
    console.log("test2 function");
}


console.log(person.firstname);
person.test();
person.test2();

person.sampleObj.balance = 500;

console.log("balance of person object is " + person.sampleObj.balance );

console.log(person.cars[0] );

console.log(person.sampleObj.complexArray[1]["pet"]);
//OR
console.log(person.sampleObj.complexArray[1].pet);


