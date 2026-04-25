// parametros y argumentos

function sumar(a, b){ // a y b son PARAMETROS
    return (a + b)
}

console.log(sumar(3, 2)) // 3 y 2 son ARGUMENTOS

let resultado = sumar(4, 2) // 4 y 2 son ARGUMENTOS
console.log(resultado)

// parametros por default
console.log(sumar(2)) // resultado NaN - NotANumber

function sumar2(num1=0, num2=0){
    return (num1 + num2)
}
console.log(sumar2(3))