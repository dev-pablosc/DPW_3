// Diferencias

sumar();
// Funcion Declarativa
function sumar(){
    console.log(2+2)
}

// Funcion de Expresion
// sumar2(); esto no funciona
const sumar2 = function(){
    console.log(5+5)
}

console.log(typeof(sumar))
console.log(typeof(sumar2))