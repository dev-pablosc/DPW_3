// crear objetos con CONSTRUCTORES

// Objeto Literal
const producto = {
    nombre: 'Tv curva',
    precio: 3742,
    disp: false
}
console.log(producto)

// Object Contructor
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

const objeto2 = new Producto('Tablet', 3000);
console.log(objeto2)

const objeto3 = new Producto('Mouse')
console.log(objeto3)

