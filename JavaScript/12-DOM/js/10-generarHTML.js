// crear un elemento y mostrarlo (2 >> appendChild && insertBefore)

// crear elemento
const nuevoEnlace = document.createElement('A'); // buena practica usar mayusculas para crear elementos 

// agregar texto  => 
// innerHTML 
nuevoEnlace.textContent='Nuevo Enlace'

// añadir atributos (setAttribute) o .href= ''
nuevoEnlace.href = 'https://www.youtube.com'
nuevoEnlace.target = '_blank';
console.log(nuevoEnlace)

// mostrar el enlace (2)  appendChild && insertBefore

// appendChild agrega al final
const nav = document.querySelector('.navegacion')
nav.appendChild(nuevoEnlace)

// colocar con mas control => insertBefore
nav.insertBefore(nuevoEnlace, nav.children[1])

