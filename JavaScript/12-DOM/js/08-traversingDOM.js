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

// modificar el texto de card
const card = document.querySelector('.card:nth-child(2)').children[1]
console.log(card)

// modificar la img
console.log(document.querySelector('.card:nth-child(3)').children[0].src='./img/hacer1.jpg')

// ver atributos del elemento
const atributos = document.querySelector('.card:nth-child(2)').children[0].attributes;
console.log(atributos)

// agregar atributos
console.log(document.querySelector('.card:nth-child(2)').children[0].setAttribute('src', './img/hacer1.jpg'))