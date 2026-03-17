// switch case
let day = 6;

switch(day){
    case 0:
        console.log("lunes");
        breack;
    case 1:
        console.log("martes");
        break;
    case 2: 
        console.log("miercoles");
        break;
    case 3:
        console.log("jueves");
        breack;
    case 4:
        console.log("viernes");
        break;
    default:
        console.log("fin de semana");
}



const metodoPago = prompt('ingrese el metodo de pago');

switch(metodoPago){
    case 'efectivo':
        pagar();
        break;
    case 'cheque':
        console.log('pago con cheque');
        break;
    case 'tarjeta':
        console.log('tarjeta');
        break;
    default:
        console.log('forma de pago no valido');
        break;
}

function pagar() {
    console.log('pagado correctamente');
} 