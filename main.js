console.log('Hola, desde main.js');

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
