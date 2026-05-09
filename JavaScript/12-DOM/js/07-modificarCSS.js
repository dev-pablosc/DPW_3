// modificar el CSS <style>

// cambiar el color del h1
const titulo = document.querySelector('h1');
titulo.style.color = '#000000'
titulo.style.border = '2px solid red'

// si la propiedad CSS tiene 2 palabras -> background-color, justify-content, text-transform
// usamos camelCase en js -> backgroundColor, justifyContent, 

titulo.style.textTransform = 'uppercase'

// agregar o quitar CLASES

const card = document.querySelector('.contenedor-cards .card:nth-child(3)');

// agregar
console.log(card.classList) // ver que clases tiene el elemento
card.classList.add('claseJS', 'segundaClase')
console.log(card.classList)

// elimnar
card.classList.remove('card')