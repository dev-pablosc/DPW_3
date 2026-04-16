// agregar usando spread Operator -> copiar TODO el contenido

// en JS existe una forma imperativa, que dice que no se debe trabajar sobre la variable original
let array1 = ['a', 'e', 'i'];
let array2 = [1, 2, 3]

let resultado = [...array1, 'copiado', ...array2, ...array1]
console.log(resultado)
