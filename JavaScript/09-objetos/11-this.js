// this -> lee los valores que existen en el objeto, no busca afuera del objeto

const producto = {
    nombre: 'Tv curva',
    precio: 3742,
    disp: false,
    mostrarInfo: function(){
        console.log(`El producto ${this.nombre} tiene un precio de: ${this.precio}`)
    }
}


producto.mostrarInfo();