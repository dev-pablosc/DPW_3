// Dentro de Js existen 2 formas mas comunes para definir una funcion

// 1 Funcion DECLARATIVA
function sumar(){
    console.log(2+2)
}
// llamar o usar funciones
sumar();
sumar();
sumar();

// 2 Funcion de EXPRESION
const sumar2 = function(){
    console.log(5+5)
}
sumar2();


// arrow functions
const sumar3 = () => {
    console.log(4+4)
}
sumar3();