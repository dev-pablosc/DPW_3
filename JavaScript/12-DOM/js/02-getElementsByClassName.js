// Seleccionar elementos por su clase 

const header = document.getElementsByClassName('header');
console.log(header)

const hero = document.getElementsByClassName('hero')
console.log(hero)

const destinos = document.getElementsByClassName('destinos')
console.log(destinos)

// si las clases se repiten
// devuelve multiples elementos
const contenedores = document.getElementsByClassName('contenedor')
console.log(contenedores)

// si no existe
const clase = document.getElementsByClassName('noExiste')
console.log(clase)