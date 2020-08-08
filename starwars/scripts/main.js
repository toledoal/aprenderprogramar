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

  let listaCompleta = [];
  // listaPersonajes.children.forEach((element) => {
  //   listaCompleta.push(element.textContent);
  // });
  for (var i = 0; i < listaCompleta.children.length; i++) {
    listaCompleta.push(listaCompleta.children[i].textContent);
  }

  window.localStorage.setItem('lista', listaCompleta);
}

function cargarLista() {
  let resultado = window.localStorage.getItem('myCat');
  let listaPersonajes = document.getElementById('lista-personajes');
  let nuevoElemento = document.createElement('li');
  nuevoElemento.textContent = resultado;

  listaPersonajes.appendChild(nuevoElemento);
}
