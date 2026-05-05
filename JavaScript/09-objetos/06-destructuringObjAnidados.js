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

const {precio, informacion:{fabricacion : {pais}} } = producto;
console.log(pais)