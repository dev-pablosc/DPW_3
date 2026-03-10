// Operadores lógicos

// and (&&) -  se deben cumplir las DOS condiciones Obligatoriamente
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)
console.log(5 > 10 && 15 > 20 && 30 > 40)

// or (||) -  basta con que se cumpla UNA condicion
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 > 10 || 15 > 20 || 30 > 40)

// se puede combinar AND con OR en una condicion
console.log(5 > 10 && 15 > 20 || 30 < 40)

// not (!) o 'Diferente'
console.log(!true)
console.log(!false)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

// Operadores ternarios
const lluvia = false
console.log(lluvia ? "Está lloviendo" : "No está lloviendo"); 