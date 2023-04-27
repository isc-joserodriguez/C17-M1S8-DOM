/**
 * Necesito una variable "Global" para guardar los datos que
 * voy a guardar.
 */

let contactos = [
  {
    nombre: 'Mario',
    apellido: 'Sanchez',
  },
  {
    nombre: 'Pedro',
    apellido: 'Lopez',
  },
];

/**
 * Declarar los elementos de mi HTML
 */

const inputNombre = document.getElementById('nombre');
const inputApellido = document.getElementById('apellido');
const formularioContacto = document.getElementById('formularioContacto');
const listaDeContactos = document.getElementById('listaDeContactos');

/**
 * Mostrar
 */
function mostrarContactos() {
  let infoDelHTML = '';
  contactos.forEach(function (contacto) {
    infoDelHTML += `
        <li style="border: 1px solid red">
            <label>${contacto.nombre}</label>
            <br>
            <label>${contacto.apellido}</label>
            <button onclick="alert('EditarUsuario')">editar</button>
            <button onclick="alert('EliminarUsuario')">eliminar</button>
        </li>
        <br>
        `;
  });
  listaDeContactos.innerHTML = infoDelHTML;
}

/**
 * Guardar contacto
 */

function guardarContacto(nombre, apellido) {
  contactos.push({
    nombre,
    apellido,
  });
  guardarContactos(contactos);
  mostrarContactos();
}

function obtenerDatosForm(event) {
  event.preventDefault();
  const nombre = inputNombre.value;
  const apellido = inputApellido.value;
  guardarContacto(nombre, apellido);
  event.target.reset();
}

/* btnGuardar.addEventListener('click', function () {
  console.log('Hiciste click!');
}); */

formularioContacto.addEventListener('submit', obtenerDatosForm);

/**
 * LocalStorage
 */

function guardarContactos(arrayDeContactos) {
  const listaDeContactosConvertidoAString = JSON.stringify(arrayDeContactos);
  localStorage.setItem('contactos', listaDeContactosConvertidoAString);
}

function obtenerContactosGuardados() {
  const listaDeContactosEnString = localStorage.getItem('contactos') || '[]';
  const listaDeContactosYaConvertidaEnUnArray = JSON.parse(
    listaDeContactosEnString
  );
  contactos = [...listaDeContactosYaConvertidaEnUnArray];
}

obtenerContactosGuardados();
mostrarContactos();
