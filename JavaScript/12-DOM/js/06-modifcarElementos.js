// modifcar elemento existe 3 alternativas

const titulo = document.querySelector('.contenido-hero h1');
console.log(titulo)

// 1 si la visibilidad es 'hidden' innerText no encuentra
console.log(titulo.innerText);

// 2 textContent lo encuentra aunque este 'hidden'
console.log(titulo.textContent);

// 3 innerHTML muestra todo el contenido, hasta etiquetas de html
console.log(titulo.innerHTML)
// console.log(document.querySelector('.contenido-hero h1').innerHTML) -> esto funciona pero no es eficiente

// MODIFICAR EL TEXTO
titulo.textContent='Titulo Modificado'
titulo.innerHTML='Titulo <b>Modificado</b> 2'

// MODIFICAR UNA IMG
const img = document.querySelector('.contenedor-cards .card:nth-child(2) img')
img.src='./img/hacer4.jpg'

const img2 = document.querySelector('.contenedor-cards .card:nth-child(3) img')
img2.src='./img/hacer4.jpg'