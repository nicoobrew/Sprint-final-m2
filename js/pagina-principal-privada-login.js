// Elementos del login
let elemLogin = document.getElementById("contenedor-login");
let elemLoginEmail = document.getElementById("login-email");
let elemLoginPassword = document.getElementById("login-password");
let elemForm = document.getElementById("form-login");

elemForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let email = elemLoginEmail.value;
    let password = elemLoginPassword.value;

    if (email.length == 0) {
        alert("Por favor ingresa una dirección de correo valida.");
    } else if (password.length == 0) {
        alert("Por favor ingresa una contraseña.");
    } else {
        window.location.href = "pagina-principal-privada.html"
    }
});