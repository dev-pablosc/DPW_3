// navagando a travez de los elemento que existen en el DOM

// traversing de padre a hijo >> children NO ChilNodes

console.log(document.querySelector('.navegacion'))
console.log(document.querySelector('.navegacion').childNodes)

console.log(document.querySelector('.navegacion').children)
console.log(document.querySelector('.navegacion').children[2].textContent = 'Modificado')

// otra opcion para navegar entre elementos
console.log('##############################################')
console.log(document.querySelector('.navegacion').firstElementChild)
console.log(document.querySelector('.navegacion').lastElementChild)


// modificar el texto de card         .card.childer[1]
const card = document.querySelector('.card:nth-child(2)').children[1].children[2].innerHTML="Agotado"
console.log(card)

// modificar la img
const imagen = document.querySelector('.contenedor-cards').children[3].children[0].src="./img/hacer1.jpg"
console.log(imagen)

// ver los ATRIBUTOS
const atr = document.querySelector('.card:nth-child(2)').children[0].attributes
console.log(atr)

// ver el valor etiqueta.getAttribute('href');
getAtr = document.querySelector('.card:nth-child(2)').children[0].getAttribute('alt')
console.log(getAtr)

//  etiqueta.setAttribute('href', '...');
//const imagen = document.querySelector('.contenedor-cards').children[3].children[0].src="./img/hacer1.jpg"
//const imagen = document.querySelector('.contenedor-cards').children[3].children[0].setAttribute('src', './img/hacer1.jpg')

//  quitar atributos >> etiqueta.removeAttribute('href');
// removeAtr = document.querySelector('.card:nth-child(2)').children[0].removeAttribute('src')

// atributos de form
console.log(document.querySelector('form').attributes)

// traversing de hijo a padre >>> parentElement
let ejemplo = document.querySelector('.hacer:nth-child(2) .info h3')
console.log(ejemplo)

console.log(ejemplo.parentElement.parentElement.parentElement.parentElement)


// traversing a los hermanos >>> nextElementSibling
console.log(document.querySelector('.card').nextElementSibling.nextElementSibling.previousElementSibling)
// hermano anterior
//.previousElementSibling
