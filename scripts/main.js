console.log('Hola, desde main.js');

const agenda = [];

const constante2 = 10;

const inputNumero = document.getElementById('numero');

console.log(inputNumero);

const elementosClassTitulo = document.getElementsByClassName('titulo');

console.log(elementosClassTitulo);

const elementosEtiquetaLabel = document.getElementsByTagName('label');

console.log(elementosEtiquetaLabel);

const elementoPorQuery = document.querySelectorAll('form label.titulo2');

console.log(elementoPorQuery);

const listaElementosQuery = [...elementoPorQuery];
//! Array.from(elementoPorQuery);

listaElementosQuery.forEach((elemento) => {
  /* elemento.style['background-color'] = 'green'; */
  /* elemento.style.backgroundColor = 'green';
  elemento.style.fontSize = '12px';
  elemento.style.border = '1px solid blue';
  elemento.style.padding = '15px'; */
  console.log(elemento.getAttribute('for'));
  elemento.setAttribute(
    'style',
    'background-color: green; font-size: 12px; border: 1px solid blue; padding: 15px'
  );
  console.log(elemento.hasAttribute('id'));
  console.log(elemento.removeAttribute('id'));
  console.log(elemento.hasAttribute('id'));
});

const listaDeContactos = document.getElementById('listaDeContactos');

let etiquetaDiv = document.createElement('div');
etiquetaDiv.style.backgroundColor = 'aqua';
/* let texto = document.createTextNode('Manuel Perez');

texto.class = 'titulo2'; 
etiquetaDiv.appendChild(texto);
*/

etiquetaDiv.innerHTML = `
<ul>
    <li>
    <h1 class="titulo2">Juan Perez</h1>
    <label id="elementoNum">Número: 1231313</label>
    </li>
    <li>
    <h1>Juan Ramirez</h1>
    <label>Número: 294875</label>
    </li>
</ul>
`;

console.log(etiquetaDiv);

listaDeContactos.appendChild(etiquetaDiv);

const formContacto = document.getElementById('contacto');

formContacto.addEventListener('submit', function (event) {
  event.preventDefault(); //Evita que sucedan los eventos por default
  console.log(event.target);
  const inputNombre2 = document.getElementById('nombre');
  const inputApellido2 = document.getElementById('apellido');
  const inputNumero2 = document.getElementById('numero');

  if (!inputNombre2.value || !inputApellido2.value || !inputNumero2.value) {
    alert('Hey, todos los datos son necesarios. Llena el Form');
  } else {
    agenda.push({
      nombre: inputNombre2.value,
      apellido: inputApellido2.value,
      numero: inputNumero2.value,
    });
  }
});
