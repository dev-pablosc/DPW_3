// objetos dentro de objetos
const producto = {
    nombre: 'Monitor',
    precio: '2000',
    disp: true,
    informacion : {
        modelo: 'LG',
        medida : {
            pulgadas: '22"'
        },
        fabricacion : {
            pais: 'China'
        }
    }
}

console.log(producto)

// acceder de manera normal
console.log(producto.informacion.modelo)
console.log(producto.informacion.fabricacion.pais)