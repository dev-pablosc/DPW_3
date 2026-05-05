// agregar o eliminar LLAVES del objeto
const producto = {
    nombre: 'Monitor',
    precio: '2000',
    disp: false
}
console.log(producto)

// Agregar - si no existe la llave se agrega, si existe se actualiza
producto.marca = 'LG';
console.log(producto)
producto.nombre = 'Tv OLED'
console.log(producto)

producto['precio'] = 4000;
console.log(producto)

// Eliminar
delete producto.disp
console.log(producto)