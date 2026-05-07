// Definir un string, usamos comillas dobles o sencillas
// la convencion actual es comillas simple
let saludo = "BienVeNiDo";
let nombre = 'pablo';

// escape de caracteres -> \ el siguiente caracter es ignorado
let producto = "Monitor 17\""

// Concatenar strings

// forma tradicional usando el simbolo '+'
console.log("Hola " + nombre + " " + saludo + " de nuevo...")
// templates literals usando el acento invertido -> `
console.log(`Hola ${nombre} ${saludo} de nuevo...`); // interpolacion con simbolo '$'


// Metodos de strings

// longitud
let tamaño = nombre.length;
console.log(tamaño); // NO CUENTA DESDE CERO, cuenta desde 1

// como un array se puede acceder mediante el indice
console.log(nombre[0]); // devuelve el indice 0 que es 'p' en este caso

// convertir el string a MAYUSCULA
let mayuscula = nombre.toUpperCase();
console.log(mayuscula);
// convertir todo a MINUSCULA
let minuscula = saludo.toLowerCase();
console.log(minuscula);

// buscar una letra o palabra (2), es un metodo CASESENTIVE, distingue mayusculas de minusculas

// indexOf()
console.log(nombre.indexOf('b')); // devuelve el indice
// includes() 
console.log(nombre.includes('b')); // devuelve un boolean