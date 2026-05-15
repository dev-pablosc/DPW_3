// eliminar (2) >> .remove & removeChild(referencia del padre)

const primerEnlace = document.querySelector('.navegacion a');
console.log(primerEnlace)

// elimina el elemento por si mismo
primerEnlace.remove()

const registro = document.querySelector('.navegacion').children[1]
registro.remove();

// referencia al padre (el padre se encarga por si solo de eliminar al hijo)
const main = document.querySelector('.contenido')
main.removeChild(main.children[0])