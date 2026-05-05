// Metodo de Obj - Seal (No permite agregar o eliminar pero SI MODIFICAR)

// habilitar el modo estricto
'use strict';

const producto = {
    nombre: 'Tv curva',
    precio: 3742,
    disp: false
}

// prevenir que un obj sea eliminado o agregado
Object.seal(producto)

// delete producto.precio
// producto.pais = 'China'

// pero SI SE PUEDE MODIFICAR
producto.precio = 77;
console.log(producto)

// para saber si un objeto tiene la propiedad SEAL
console.log(Object.isSealed(producto))
