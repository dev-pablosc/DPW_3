// Destructuring de objetos
const producto = {
    nombre: 'Monitor',
    precio: '2000',
    disp: true
}
console.log(producto)

// forma antigua
let nombreExtraido  = producto.nombre;
console.log(nombreExtraido)

// forma nueva
const {nombre} = producto;
console.log(nombre)


const {precio, disp} = producto;
console.log(`el total a pagar es: ${precio}, se encuentra disponible ? -> ${disp}`)