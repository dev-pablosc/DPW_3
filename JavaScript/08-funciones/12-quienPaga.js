// quien paga la cena

function pagar(nombres){
    let n = Math.floor(Math.random() * nombres.length);
    console.log(`el numero random es: ${n}`)
    return `la persona que pagar la cena es ${nombres[n]}`
}

let personas = ['pablo', 'carlos', 'franz', 'rafael']

console.log(pagar(personas))