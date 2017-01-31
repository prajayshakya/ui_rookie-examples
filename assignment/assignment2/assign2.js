

var person_array=[];

function addperson(e)
{
    e.preventDefault(); // helps to call javascript file
    
    //select by name via checkbox
    var gender = "";
    var radios = document.getElementsByName('gender'); 
    var checkeditem = false; //added for validation
    for (var i = 0, length = radios.length; i < length; i++)
    {
        if (radios[i].checked) {
            // do whatever you want with the checked radio
            gender = radios[i].value;
            // only one radio can be logically checked, don't check the rest
            checkeditem = true; // 
            break;
        }
    }
    if(checkeditem == false) // validates the gender
        {
            $('#lbl_gender').addClass('error');
            $('#gender_Error').html('*select gender').addClass('error1');
        }
    else{
            $('#lbl_gender').removeClass('error');
            $('#gender_Error').html(" ").removeClass('error1');
    }
    //
    
    var person = {
        
        'firstname' : document.getElementById('f_name').value, 
        'lastname' : document.getElementById('l_name').value,
        'gender':gender,
        'address': document.getElementById('address').value,
        'state': document.getElementById('state').value,
        'city': document.getElementById('city').value,
        'country': document.getElementById('countries').value,
        'contact': document.getElementById('contact').value
    };   
    
    
    var firstName = $('#f_name').val();//displays the static value entered in first name
    //alert(firstName); just to check if it was working or not
    if(firstName.length == 0 ){
        $('#lbl_f_name').addClass('error');
        $('#F_nameError').html(' *FirstName cant be empty').addClass('error1');
    }
    else
        {
            $('#lbl_f_name').removeClass('error');
            $('#F_nameError').html(" ").removeClass('error1');
        }
    
    
    var lastname=$('#l_name').val();
    if(lastname.length == 0 ){
        $('#lbl_l_name').addClass('error');
        $('#l_nameError').html(' *lastname cant be empty').addClass('error1');
    }
    else
        {
            $('#lbl_l_name').removeClass('error');
            $('#l_nameError').html(" ").removeClass('error1');
        }
    
    
    
    
    
    var address = $('#address').val();
    if(address.length == 0 ){
        $('#lbl_address').addClass('error');
        $('#address_Error').html(' *Address cant be empty').addClass('error1');
    }
    else
        {
            $('#address').removeClass('error');
            $('#address_Error').html(" ").removeClass('error1');
        }
    
    var city = $('#city').val();
    if(city.length == 0 ){
        $('#lbl_city').addClass('error');
        $('#city_Error').html(' *city cant be empty').addClass('error1');
    }
    else
        {
            $('#city').removeClass('error');
            $('#city_Error').html(" ").removeClass('error1');
        }
    
    
    
    var contact = $('#contact').val();
    if(contact.length == 0 ){
        $('#lbl_contact').addClass('error');
        $('#contact_Error').html(' *Address cant be empty').addClass('error1');
    }
    else
        {
            $('#contact').removeClass('error');
            $('#contact_Error').html(" ").removeClass('error1');
        }
    
    var country = $('#countries').val();
    if(country.length == 0)
    {
        $('#lbl_countries').addClass('error');
        $('#countries_Error').html(' *country cant be empty').addClass('error1');
    }
    else
        {
            $('#countries').removeClass('error');
            $('#countries_Error').html(" ").removeClass('error1');
        }  
    
    var state = $('#state').val();
    if(state.length == 0)
    {
        $('#lbl_state').addClass('error');
        $('#state_Error').html(' *state cant be empty').addClass('error1');
    }
    else
        {
            $('#state').removeClass('error');
            $('#state_Error').html(" ").removeClass('error1');
        }  
    
    
    
    person_array.push(person);// stores vlaues of object person into person_array
    document.form.reset();
    console.log(person_array); // displays values entered in person_array
    
}




function displayperson(e1)
{
    
    e1.preventDefault();
    
   
    var htmlcontent1 = 
        "<table class = 'table table-striped' >"+ 
        "<tr>"+
            "<td>FullName</td>"+ "<td>Gender</td>"+ "<td>Address</td>" + "<td>contact</td>"+
        "</tr>";
    for(var i = 0; i <person_array.length; i++)
    {
        htmlcontent1 += "<tr><td>" + person_array[i].firstname+ ", " + person_array[i].lastname+ "</td>";
        htmlcontent1 += "<td>"+person_array[i].gender + "</td>";
        htmlcontent1 += "<td>" + person_array[i].address + ", " + person_array[i].city + ", "+ person_array[i].state + ", " + person_array[i].country + "</td>";
        htmlcontent1 += "<td>" +person_array[i].contact
        htmlcontent1 += "</tr>";
    }
        
        
       htmlcontent1+= "</table>";
    // document.getElementById('d1').innerHTML = htmlcontent1;
    $('#d1').html(htmlcontent1); //using jquerry

   
   
}

$(document).ready(function(){
    //$("#btn1").click( function(){
    $("#btn1").on('dblclick', function(){
        alert("hello world");
        
    });                  

    $('#first').hide();
    $('#second').hide();


    $("#firstbtn").on("click", function(){
                  $("#first").show();
                  });


 $("#secondbtn").on("click", function(){
                  $("#second").show();
                  });


    $('#thirdbtn').on('click', function(){
                        $('#firstbtn').trigger('click');
                        $('#secondbtn').trigger('click');
                      });
    
    // changes the color of firstname
    $('#btn4').on('click',function(){
        $('#lbl_f_name').addClass('error');   
                                });
    
    // removes color in firstname
    $('#btn5').on('click',function(){
    $('#lbl_f_name').removeClass('error');
                        });
    
   
       // $('#f_name').val('john'); // concept of static of java. 
    
    $('#f_name').on('blur', function(){
        var firstName = $('#f_name').val();//displays the static value entered in first name
    //alert(firstName); just to check if it was working or not
    if(firstName.length == 0 ){
        $('#lbl_f_name').addClass('error');
        $('#F_nameError').html(' *firstName cant be empty').addClass('error1');
    }
    else
        {
            $('#lbl_f_name').removeClass('error');
            $('#F_nameError').html(" ").removeClass('error1');
        }
    
    });
    
    $('#l_name').on('blur', function()
                   {
        var lastname=$('#l_name').val();
    if(lastname.length == 0 ){
        $('#lbl_l_name').addClass('error');
        $('#l_nameError').html(' *lastname cant be empty').addClass('error1');
    }
    else
        {
            $('#lbl_l_name').removeClass('error');
            $('#l_nameError').html(" ").removeClass('error1');
        }
        
    });
    
});
