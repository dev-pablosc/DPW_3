// agregar valores (3)
const semana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
console.log(semana.length)

// agregando por el indice - (agregar o se acutalizar) 
semana[5] = 'Sabado';
semana[1] = 'MARTESSSS'

// agregar al final -> PUSH
semana.push('Domingo')
console.log(semana)

// agregar al principio -> unshift
semana.unshift('Dias de la semana -> ')
console.log(semana)
