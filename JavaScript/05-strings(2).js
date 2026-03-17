// mas metodos IMPORTANTES

// QUITAR Espacion en blancog
const producto = '     TV de 40"      ';
console.log(producto);
console.log(producto.length);

// Eliminar espacio del INICIO
console.log(producto.trimStart());
// espacio al FINAL
console.log(producto.trimEnd());
// INICIO y FINAL
console.log(producto.trimEnd().trimStart());
console.log(producto.trim());
console.log(producto.trim().length); // chaining methods unir 2 o mas metodos