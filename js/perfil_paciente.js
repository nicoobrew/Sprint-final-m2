// Elementos del login
let elemLogin = document.getElementById("contenedor-login");
let elemLoginEmail = document.getElementById("login-email");
let elemLoginPassword = document.getElementById("login-password");
let elemForm = document.getElementsByTagName("form")[0];

// Elementos del perfil
let elemPerfil = document.getElementById("contenedor-perfil");
let elemPerfilEmail = document.getElementById("perfil-email");

elemForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let email = elemLoginEmail.value;
    let password = elemLoginPassword.value;

    if (email.length == 0) {
        alert("Por favor ingresa una dirección de correo valida.")
    } else if (password.length == 0) {
        alert("Por favor ingresa una contraseña.")
    } else {
        // Copiar el email del login al perfil
        elemPerfilEmail.textContent = email;

        // Eliminar login
        elemLogin.remove();

        // Mostrar Perfil
        elemPerfil.style.display = 'block';
    }
});