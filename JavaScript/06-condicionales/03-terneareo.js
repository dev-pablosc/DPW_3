// operador terneareo

let edad = 5;
/*
if (edad >= 18) {
    console.log("puede votar");
} else if{
    console.log("no puede votar");
}
/*

// ESTE ES EL OPERADOR TERNEAREO
// console.log((edad >= 18) ? "se cumple, si puede votar" : "no se cumple, no puede votar")


// EJEMPLO REALIZADO EN CLASES ANIDADACION DE TERNEAREO
/*
if (edad >= 60){
    console.log("voto opcional")
} else if (edad >= 18){
    console.log("puede votar")
} else {
    console.log("no puede votar")
} 
    */

console.log((edad >= 60) ? "voto opcional" : (edad >= 18 ) ? "puede" : "no puede")