/*note:-    look into regular expression for more details in validation
            look for DOM tree
 */



'use strict';
//anything with $ sign belongs to jquery
//$(document).ready(function(){
//    $("#fName").val();
//    $("lName").val();
//    
//});
$( function() {
    $( "#tabs" ).tabs();
  } );

$( function() {
    $( "#accordion" ).accordion();
  } );
//we use those submit inside a function becuase, in large scale its gonna throw an error.
$(function(){
//   $("#submit").click(function(){
//        submit();
//     }); 
    //$("#submit").click(submit); 
    $("#submit").click(submit).prop("disabled",true); //if you want to disable, you can use off ALSO called as EVENT BUBBLING. we can do this from html as well. just add disabled = true.
    $("#display").click(display);
    $("#test").on("click", function(){
        
        $("#submit").trigger("click");
        $("#display").trigger("click");
    });
    
    $("#sample").hide();  //you can use show and hide technique acc to its requirement 
     
    $("#sampleBtn").on("click",toggleHide);
    
    $(".error-msg").hide();
    
    $("#validate").on("click",validate);
    
    $( ".dialog" ).dialog({
        autoOpen:false
    });
    
    $
    
    $("#openForm").on("click",function(){
//        alert("agfis");
        $(".dialog #formWrapper").dialog("open");
    });
});


function person(){
    var firstName = " ";
    var lastName = " ";
    var address = " ";
    var dob = " ";
//    var gender = " ";
//    var country = " ";
//    var cars = [];
    
    //Accessors are the funciton that allows you to access private properties, get
    //Mutators are the function that allows you to modify the properties, set
    
    
    //Accesssing firstname
    this.setFirstName = function(fname){
        firstName = fname;
    }
    this.getFirstName = function(){
        return firstName;
    }
    //accesing the lastname
    this.setLastName = function(lname){
        lastName = lname;
    }
    this.getLastName = function(){
        return lastName;
    }
    //accessing address
    this.setAddress = function(add){
        address = add;
    }
    this.getAddress = () =>  address;
    
    //accesng dob
    this.setDob = (bday) =>  dob = bday;
    this.getDob = () =>  dob;
    
    
    
    this.checkData = function(){
        console.log("first Name:" + firstName);
        console.log("last Name:" + lastName);
        console.log("Address:" + address);
        console.log("dob:" + dob);
        console.log("gender:" + gender);
        console.log("country:"+ country);
        
        if(cars.length > 0){
            console.log("cars List")
            cars.forEach(function(x){
                         console.log(x);
                         })
        }
    }
       
}
//var personArray = [];
//
//var personObj = new person();
//var carsArray = ["ford", "toyota"];
//
//personObj.setFirstName("Tekendra");
//personObj.setLastName("Puri");
//personObj.setAddress("patan");
//personObj.setDob("12/14/1990");
//personObj.setCountry("Nepal");
//personObj.setcars(carsArray);
//personObj.checkData();
//
//personArray.push(personObj);
//console.log(personArray[0]);
//
//personArray[0].checkData();



var personArray = [];
function submit(){
    var personObj = new person();
//    var firstName = document.getElementById("fName").value;
//    var lastName = document.getElementById("lName").value;
    
    //by jquery
     var firstName = $("#fName").val(); 
     var lastName = $("#lName").val();
     var dob = $("#dob").val();
    var error = 0;
    var regEx = new RegExp('^([a-z]|[A-Z])([a-z]|[A-Z]|[1-9])*$', 'g'); //^starts, $ends, gexactMatch
    
    
        var firstName = $("#fName").val();
        console.log(firstName.match(regEx));
        var lastName = $("#lName").val();
    
    if(firstName.length == 0 || firstName.match(regEx)==null)
    {   error++;
        $("#fnameErr").show();
    }
    else{
        $("#fnameErr").hide();
    }
    if(lastName.length == 0){
        error++;
       $("#lnameErr").show();
    }
    else{
        $("#lnameErr").hide();
    }
    if(dob.length == 0){
        error++;
       $("#dobErr").show();
    }
    else{
        $("#dobErr").hide();
    }
    
    
    if(error == 0)
    {
    personObj.setFirstName(firstName);
    personObj.setLastName(lastName);
    personObj.setDob(dob);
    personObj.checkData();
    personArray.push(personObj);
    display(); // for jquery UI
    }
    else{
        
        $(".dialog").dialog("open");

    }
    
}

function generateTable(sample)
{       var template=" ";
        var i = 1;
        sample.forEach(function(x){
            
            template += "ITEM" + i + "<br>";
            template += "FirstName:" + x.getFirstName() + "<br>";
            template += "last name:" + x.getLastName() + "<br>";
            template += "D.O.B:" + x.getDob() + "<br>";
            
            template += "<hr>";
            i++;
    });
        return template;
}

function display(){
    var result = generateTable(personArray);
//    document.getElementById("results").innerHTML = result; // by javascript
    
    $("#results").html(result); // by jquery
    
}

function toggleHide(){
    if($("#sample").is(":visible")){
        $("#sample").hide();
    }
    else{
        $("#sample").show();
    }
}

function validate(){
    
     var personObj = new person();
//    var firstName = document.getElementById("fName").value;
//    var lastName = document.getElementById("lName").value;
    
    //by jquery
     var firstName = $("#fName").val(); 
     var lastName = $("#lName").val();
     var dob = $("#dob").val();
    var error = 0;
    var regEx = new RegExp('^([a-z]|[A-Z])([a-z]|[A-Z]|[1-9])*$', 'g'); //^starts, $ends, gexactMatch
    
    
        var firstName = $("#fName").val();
        console.log(firstName.match(regEx));
        var lastName = $("#lName").val();
        var dob = $("#dob").val();
    if(firstName.length == 0 || firstName.match(regEx)==null)
    {   error++;
        $("#fnameErr").show();
    }
    else{
        $("#fnameErr").hide();
    }
    if(lastName.length == 0){
         error++;
       $("#lnameErr").show();
    }
    else{
        $("#lnameErr").hide();
    }
    if(dob.length == 0){
        error++;
       $("#dobErr").show();
    }
    else{
        $("#dobErr").hide();
    }
    
//    if(error>0){
//        $(".error-msg").show();
//    }
//    else{
//        $(".error-msg").hide();
//    }
    
    if(error == 0){
        $("#submit").click(submit).prop("disabled",false); 
    }
    else{
        $("#submit").click(submit).prop("disabled",true); 
    }
    console.log(error + "Errors found!!");
    
    if(error>0){
        $("#errorCount").html(error);
        $(".dialog").dialog("open");
    }
}

