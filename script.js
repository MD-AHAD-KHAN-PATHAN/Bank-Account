console.log('Welcome to js');

document.getElementById('submit').addEventListener('click', function () {
    const emailFild = document.getElementById('email');
    const passwordFild = document.getElementById('password');

    if (emailFild.value == 'md.ahadkhanpathan.tct@gmail.com' && passwordFild.value == 'ahadkhan') {
        window.location.href = 'user.html';
        console.log('User is valid');
        emailFild.value = '';
    }
    else {
        alert('Your Email and Password is not Corrrect ! Please Enter Your Valid Email and Password.')
        emailFild.value = '';
        passwordFild.value = '';
    }
})

