document.getElementById('login-submit').addEventListener('click', function () {

    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);

    // get user password
    const passField = document.getElementById('user-password');
    const userPassword = passField.value;
    // console.log(userPassword);

    // check email and password
    if (userEmail == 'webdmamun@gmail.com' && userPassword == 'secret') {
        window.location.href = 'banking.html'
    }

})