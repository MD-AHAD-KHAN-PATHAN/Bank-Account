console.log('Welcome to js');

document.getElementById('submit').addEventListener('click', function(){
    const emailFild = document.getElementById('email');
    const passwordFild = document.getElementById('password');
    
    if(emailFild.value == 'md.ahadkhanpathan.tct@gmail.com' && passwordFild.value == 'ahadkhan')
    {
        console.log('User is valid');
    }
    else
    {
        console.log('User is not valid');
    }
})