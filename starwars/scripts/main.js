function mostrarMensaje() {
  let cajaDeTexto = document.getElementById('mensajeInput');
  let listaPersonajes = document.getElementById('lista-personajes');

  let nuevoElemento = document.createElement('li');
  nuevoElemento.textContent = cajaDeTexto.value;

  listaPersonajes.appendChild(nuevoElemento);

  cajaDeTexto.value = '';
}

function guardarLista() {
  let listaPersonajes = document.getElementById('lista-personajes');

  // Creamos un array vacio...
  let listaCompleta = [];

  // Vamos a recorrer cada uno de los <li> de la lista, leer su textContent y agregarlo al array listaCompleta
  for (var i = 0; i < listaPersonajes.children.length; i++) {
    listaCompleta.push(listaPersonajes.children[i].textContent);
  }

  // Por ultimo grabamos en local storage la lista como un elemento llamado lista
  window.localStorage.setItem('lista', listaCompleta);
}

function cargarLista() {
  // traemos al programa el elemento que grabamos anteriormente...
  // lista debe ser un string con el siguiente formato "Luke, Darth, Yoda" es decir, separado por comas
  let resultado = window.localStorage.getItem('lista');

  // Aqui transformamos el resultado en un Array, usando split por comas
  let resultadoAsArray = resultado.split(',');

  let listaPersonajes = document.getElementById('lista-personajes');
  // Antes de agregar elementos a la lista, debemos borrar los anteriores para no tener repetidos
  listaPersonajes.innerHTML = '';

  // Por ultimo agregamos a la lista cada nombre...
  resultadoAsArray.forEach((nombreEnLista) => {
    let nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = nombreEnLista;

    listaPersonajes.appendChild(nuevoElemento);
  });
}

function cargarListaAutomaticamente() {
  cargarLista();
}

window.onload = function () {
  cargarListaAutomaticamente();
};
