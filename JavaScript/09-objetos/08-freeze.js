// Metodo de objetos - Freeze (no permite agregar, modificar o eliminar)

// habilitar el modo estricto
'use strict';

const producto = {
    nombre: 'Tv curva',
    precio: 3742,
    disp: false
}

// prevenir que un obj  se pueda agregar, modificar o eliminar
Object.freeze(producto)

// producto.precio = 1256;
// producto.pais = 'China';
// delete producto.disp

console.log(producto)

// como saber si esta congelado ?
console.log(Object.isFrozen(producto))