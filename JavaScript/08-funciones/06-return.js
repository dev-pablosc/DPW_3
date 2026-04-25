// las funciones retornan valores con RETURN

function sumar(a=0, b=0){
    return a + b
}
let resultado = sumar(2, 5)
console.log(resultado)

// ejemplo mas avanzado
let total = 0;
function agregarCarrito(precio){
    return total += precio
}
function calcularImpuesto(total){
    return total * 1.15;
}

let carrito = 0;
carrito = agregarCarrito(300);
carrito = agregarCarrito(100);
carrito = agregarCarrito(600);

console.log(carrito)

let totalPagar = calcularImpuesto(carrito);
console.log(`El monto total de compra es -> ${carrito}, total mas impuestos es: ${totalPagar}`)


// redondeo en JS
carrito = agregarCarrito(600);
carrito = agregarCarrito(600);
carrito = agregarCarrito(600);
carrito = agregarCarrito(600);
console.log(carrito)
totalPagar = calcularImpuesto(carrito);
console.log(`El monto total de compra es -> ${carrito}, total mas impuestos es: ${Math.round (totalPagar)}`)

// Math.round(valor) -> redondeo clasico al mas cercano
// Math.ceil(valor) -> redondeo para arriba
// Math.floor(valor) -> redondeo para abajo