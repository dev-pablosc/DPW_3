// volver en funciones
const myArray = carrito.forEach( function (producto){
    return `${producto.nombre} Precio: ${producto.precio}`
})

const myArray2 = carrito.map( function (producto){
    return `${producto.nombre} Precio: ${producto.precio}`
})