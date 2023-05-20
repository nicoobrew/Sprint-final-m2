// Elementos del login
let elemLogin = document.getElementById("contenedor-login");
let elemLoginEmail = document.getElementById("login-email");
let elemLoginPassword = document.getElementById("login-password");
let elemForm = document.getElementsByTagName("form")[0];

// Genera un perfil de usuario, retornando el elemento que lo representa
function generarPerfil(email) {
    // Crear el elemento del perfil
    let elemPerfil = document.createElement("div");
    elemPerfil.id = "contenedor-perfil";
    elemPerfil.className = "container";

    // Este es el contenido HTML del perfil
    elemPerfil.innerHTML = `
    <div class="row justify-content-center align-items-center mt-5">
    <div class="col-sm-12 col-md-6 col-xl-4 d-flex justify-content-center">
        <!-- Credito imagen: Huaco Huapo 
        https://www.pexels.com/photo/a-woman-in-an-orange-knit-cardigan-smiling-8537146/ -->
        <img src="img/pexels-huaco-huapo-8537146-cropped.jpg" alt="foto de perfil" id="perfil-foto"
            class="img-fluid">
    </div>
    <div class="col-sm-12 col-xl-4">
        <div>
            <h2 id="perfil-nombre">Teresa Lopez</h2>
        </div>
        <div class="card mb-2">
            <b class="card-header">Información de Contacto</b>
            <div class="card-body">
                <div class="row">
                    <span class="col-4">Email:</span>
                    <span id="perfil-email" class="col-8">${email}</span>
                    <span class="col-4">Dirección:</span>
                    <span id="perfil-direccion" class="col-8">Ejercito 123</span>
                    <span class="col-4">Telefono:</span>
                    <span id="perfil-telefono" class="col-8">+1 123 456 7890</span>
                </div>
            </div>
        </div>
        <div class="card">
            <b class="card-header">Información Básica</b>
            <div class="card-body">
                <div class="row">
                    <span class="col-4">Fecha de Nacimiento:</span>
                    <span id="perfil-nacimiento" class="col-8">12 de Octubre de 1998</span>
                    <span class="col-4">Género:</span>
                    <span id="perfil-genero" class="col-8">Femenino</span>
                </div>
            </div>
        </div>
    </div>
    </div>
    `;

    return elemPerfil;
}


elemForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let email = elemLoginEmail.value;
    let password = elemLoginPassword.value;

    if (email.length == 0) {
        alert("Por favor ingresa una dirección de correo valida.");
    } else if (password.length == 0) {
        alert("Por favor ingresa una contraseña.");
    } else {
        // Eliminar login
        elemLogin.remove();

        // Mostrar el perfil
        let elemBody = document.body;
        elemBody.insertBefore(generarPerfil(email), elemBody.firstChild);
    }
});