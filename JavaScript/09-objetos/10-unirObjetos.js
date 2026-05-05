// unir 2 Objetos

const producto = {
    nombre: 'Tv curva',
    precio: 3742,
    disp: false
}

const medida = {
    peso: '10kg',
    pulgadas: '20"'
}

// Objtect.assign()
const unido = Object.assign(medida, producto)
console.log(unido)

// Spread operator o Rest Operator
const unido2 = {...producto, ...medida}
console.log(unido2)