function login(e){
    console.log("hello");
    e.preventDefault();
    // array for all legal information
    var credential = [{
       'email': 'a',
        'password':'a'
            
        
    }];
    
    var email = $('#email_id').val();
    if(email.length == 0)
        {
            $('#email_span').html('*empty').addClass('error');
        }
    else
        {
            $('#email_span').html(' ').removeClass('error');
        }
    
    var password = $('#password_id').val();
    if(password.length == 0)
        {
            $('#password_span').html('*empty').addClass('error');
        }
    else
        {
            $('#password_span').html(' ').removeClass('error');
        }
    
    for(var i=0; i<credential.length; i++ )
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
var email = $('#email_id').val();
$('#email_id').on('blur', function(){
  if(email.length == 0)
        {
            $('#email_span').html('*empty').addClass('error');
        }
    else
        {
            $('#email_span').html(' ').removeClass('error');
        }
    
});

var password = $('#password_id').val();
$('#password_id').on('blur', function(){
    if(password.length == 0)
        {
            $('#password_span').html('*empty').addClass('error');
        }
    else
        {
            $('#password_span').html(' ').removeClass('error');
        }
});