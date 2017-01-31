function login(e){
    console.log("hello");
    e.preventDefault();
    // array for all legal information
    var credentials = [{
       'email': 'prajayshakya@gmail.com',
        'password':'12345'},
            
        
    }];
    
    var email = $('#email_id').val();
    var password = $('#password_id').val();
    for(var i=0; i<credentials.length; i++ )
        {
            if(credential[i].email == email && credential[i].password == password)
                {
                    window.location.href = "index.html";
                }
            else
                {
                    window.alert("error bitch");
                }
        }
    
    
}