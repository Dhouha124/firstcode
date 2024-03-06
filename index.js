function passworrd() {
    var passwordInput = document.getElementById('password');
    var showPasswordCheckbox = document.getElementById('showPassword');

    if (showPasswordCheckbox.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}

function submitForm() {
    var mail = document.getElementById('mail').value;
    var password = document.getElementById('password').value;

    if (mail && password) {
        alert('mail : ' + mail + '\nMot de passe : ' + password);
    } else {
        alert('Veuillez remplir tous les champs.');
    }
}