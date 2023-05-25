let idUsuario = 1;
let elemListaUsuarios = document.getElementById("lista-usuarios");

// Activar Modales
const modalDiagnostico = new bootstrap.Modal('#modal-diagnostico', {
    keyboard: false
});

const modalUsuario = new bootstrap.Modal('#modal-usuario', {
    keyboard: false
});

function eliminarUsuario(event) {
    for (let atributo of event.target.attributes) {
        if (atributo.name == "data-usuario") {
            let itemUsuario = document.getElementById(`usuario-${atributo.value}`);
            itemUsuario.remove();
            break;
        }
    }
}

function agregarDiagnostico(event) {
    event.preventDefault();

    let elemDiagnostico = document.getElementById('modal-diagnostico-diagnostico');
    let elemFecha = document.getElementById('modal-diagnostico-fecha');
    let elemInicioTratamiento = document.getElementById('modal-diagnostico-inicio');

    for (let atributo of event.target.attributes) {
        if (atributo.name == "data-usuario") {
            let itemTBody = document.querySelector(`#usuario-${atributo.value}-contenido tbody`);

            let tr = document.createElement('tr');
            let td;

            td = document.createElement('td');
            td.textContent = elemDiagnostico.value;
            tr.appendChild(td);

            td = document.createElement('td');
            td.textContent = elemFecha.value;
            tr.appendChild(td);

            td = document.createElement('td');
            td.textContent = elemInicioTratamiento.value;
            tr.appendChild(td);

            itemTBody.appendChild(tr);

            break;
        }
    }

    modalDiagnostico.hide();
}

// Retorna un boton para controlar datos de un usuario
function botonUsuario(accion, usuario, clase, texto) {
    let elemBoton = document.createElement('button');

    elemBoton.setAttribute("data-accion", accion);
    elemBoton.setAttribute("data-usuario", `${usuario}`);
    elemBoton.className = clase;
    elemBoton.textContent = texto;

    return elemBoton;
}

function agregarUsuario(event) {
    event.preventDefault();

    idUsuario += 1;

    let elemNombre = document.getElementById("modal-usuario-nombre");
    let elemEdad =  document.getElementById("modal-usuario-edad");

    let plantilla = `
    <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse"
            data-bs-target="#usuario-${idUsuario}-contenido" aria-expanded="true" aria-controls="usuario-${idUsuario}-contenido">
            ${elemNombre.value} (${elemEdad.value} Años)
        </button>
    </h2>
    <div id="usuario-${idUsuario}-contenido" class="accordion-collapse collapse show" data-bs-parent="#lista-usuarios">
        <div class="accordion-body">
            <table class="table">
                <thead>
                    <tr>
                        <th>Diagnostico</th>
                        <th>Fecha Diagnóstico</th>
                        <th>Inicio Tratamiento</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    </div>`;

    let elemItemUsuario = document.createElement('div');
    elemItemUsuario.className = "accordion-item";
    elemItemUsuario.id = `usuario-${idUsuario}`;

    elemItemUsuario.innerHTML = plantilla;

    let elemBotonDiagnostico = botonUsuario(
        "agregar-diagnostico", idUsuario, "btn btn-primary m-2", "Agregar Diagnóstico"
    );
    elemBotonDiagnostico.addEventListener('click', abrirModalDiagnostico);

    let elemBotonEliminar = botonUsuario(
        "eliminar", idUsuario, "btn btn-danger m-2", "Eliminar Usuario"
    );
    elemBotonEliminar.addEventListener('click', eliminarUsuario);

    elemListaUsuarios.appendChild(elemItemUsuario);

    let elemAccordionBody = document.querySelector(
        `#usuario-${idUsuario}-contenido .accordion-body`
    );

    elemAccordionBody.appendChild(elemBotonDiagnostico);
    elemAccordionBody.appendChild(elemBotonEliminar);

    modalUsuario.hide();
}

function abrirModalDiagnostico(event) {
    for (let atributo of event.target.attributes) {
        if (atributo.name == "data-usuario") {
            let elemFormaModal = document.querySelector("#modal-diagnostico form");
            elemFormaModal.setAttribute("data-usuario", atributo.value);
            break;
        }

        modalDiagnostico.show();
    }
}

let botonesEliminar = document.querySelectorAll(
    'button[data-accion="eliminar"]'
);
for (let boton of botonesEliminar) {
    boton.addEventListener('click', eliminarUsuario);
}

let botonesDiagnostico = document.querySelectorAll(
    'button[data-accion="agregar-diagnostico"]'
);
for (let boton of botonesDiagnostico) {
    boton.addEventListener('click', abrirModalDiagnostico);
}

document.getElementById("boton-agregar-usuario")
    .addEventListener('click', function (event) { modalUsuario.show(); });

document.querySelector("#modal-diagnostico form")
    .addEventListener('submit', agregarDiagnostico);

document.querySelector("#modal-usuario form")
    .addEventListener('submit', agregarUsuario);