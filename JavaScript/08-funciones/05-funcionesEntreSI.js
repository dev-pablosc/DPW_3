// como se comunican las funciones entre si

function iniciarApp(){
    console.log('iniciando apliacion . . .')
    segundaFuncion();
}

function segundaFuncion(){
    console.log('desde la segunda funcion');
    const userS = prompt('Introduce tu nombre: ')
    console.log(userS);
    userAuth(userS)
}

function userAuth(v){
    console.log('Autenticando . . .')
    console.log(`Usuario autenticado correctamente: ${v}`)
}

iniciarApp();