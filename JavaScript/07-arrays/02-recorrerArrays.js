// recorrer un array (3) for, forEach, for of, 
const semana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];

// cuanto mide el array
console.log(semana.length) // length empieza desde 1

// 1 forma - clasica
for(let i=0; i<semana.length; i++){
    console.log(semana[i])
}

// forEach 2da manera
semana.forEach(valor => {
    console.log(valor)
})

// for of
for (valor of semana){
    console.log(valor)
}