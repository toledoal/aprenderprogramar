// Este arreglo ejemplifica que un arreglo puede contener diversos tipos
// de datos
var miArreglo = [1, 2.4, 'jugar', {}, [1, 2]];

// Este objeto indica con propiedades los valores de los datos
var miObjecto = {
  entero: 1,
  float: 2.4,
  string: 'jugar',
  objecto: {},
  arreglo: [1, 2],
};

// acceder a objecto
miArreglo[3];
// Vale {}

miObjecto.objecto;
// Vale {}

//Operaciones Aritmetica
//Suma +
var res = 12 + 4;
// res guarda el valor de 16
res = 12 - 4;
// res guarda el valor 8
res = 12 * 4;
// res guarda el valor 48
res = 12 / 4;
// res guarda el valor 3;
res = 12 % 4;
// res guarda el valor 0

//Operaciones Logicas AND/OR/XOR
res = 'string' & 'string';
res = 0x021 | 0x121;

//AND
//&

//OR
//|

'cosa' === 'cosa'; // true

'Cosa' === 'cosa'; // false
//=== es igual

'Cosa' !== 'cosa'; // true
//!== no es igual
