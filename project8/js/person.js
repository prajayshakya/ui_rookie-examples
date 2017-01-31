var person = {
        'firstName': 'Joe', 
        'lastName': 'Doe',
        'DOB': '12/12/2019',
        'Age': '102',
        'Address': '1234 4th Ave',
        'email': 'ui@cubic.net'
        
            };
console.log(person);

function loadPerson()
{
    //alert('Hello World');
    //document.getElementById('person').innerHTML = '<h1>Updated: The content is replaced</h1>';
    
    var htmlcontents = '<h1>Updated: The content is replaced</h1>';
    document.getElementById('person').innerHTML = htmlcontent1;
}

//loadPerson();

console.log(person.firstName);
console.log(person.lastName);

//making a table via javascript

var htmlcontent1 =
" <table class= 'table table-striped'>" +
    "<tr>" + 
        "<th> FirstName </th>" +
        "<td>" + person.firstName+ "</td>" +
    "</tr>" +
    
    "<tr>" + 
        "<th> LastName </th>" +
        "<td>" + person.lastName+ "</td>" +
    "</tr>" +
    
    "<tr>" + 
        "<th> DOB </th>" +
        "<td>" + person.DOB+ "</td>" +
    "</tr>" +
    
    "<tr>" + 
        "<th> Address </th>" +
        "<td>" + person.Address+ "</td>" +
    "</tr>" +
    
    "<tr>" + 
        "<th> Email </th>" +
        "<td>" + person.email+ "</td>" +
    "</tr>" +
    
    
"</table>";

            
    