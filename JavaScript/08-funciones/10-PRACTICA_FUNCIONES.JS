// Calculadora de indice de masa corporal (IMC)

// cual es la formula
// (peso / altura ** 2);

// crear una funcion, recibe 2 parametros
// if (imc < 18.5) - tu imc es inferior al normal
// Normal	if(imc > 18.5 && imc < 24.9)
// Peso superior al normal if(imc > 25.0 && imc < 29.9)
// Obesidad	if(imc > 30)

function calcularIMC(peso, altura){
    if(peso <= 0 || altura <= 0 || isNaN(peso) || isNaN(altura)){
        return 'Numero no valido';
    }

    // Convertimos altura de cm a metros dividiendo por 100
    let alturaMetros = altura / 100;
    let imc = peso / (alturaMetros ** 2);

    if (imc < 18.5) return `IMC: ${imc.toFixed(2)} - Bajo peso`;
    else if (imc <= 24.9) return `IMC: ${imc.toFixed(2)} - Normal`;
    else if (imc <= 29.9) return `IMC: ${imc.toFixed(2)} - Sobrepeso`;
    else return `IMC: ${imc.toFixed(2)} - Obesidad`;
}

let peso = prompt('Introduce tu peso en KG:');
let altura = prompt('Introduce tu altura en CM:');

// Es buena práctica validar que sean números antes de llamar a la función
let resultado = calcularIMC(Number(peso), Number(altura));

console.log(resultado);
