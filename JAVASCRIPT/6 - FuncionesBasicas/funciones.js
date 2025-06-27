
// Funcion basica
function saludar(nombre) {
    console.log(arguments);
    console.log(`Hola ${nombre}`);
}

// Funcion anonima
const saludar2 = function(nombre) {
    console.log(`Hola ${nombre}`);
}

// Arrow function
// Los parentesis del arrow function son opcionales si solo hay 1 argumento
const saludarFecha = (nombre) => {
    console.log(`Hola ${nombre}`);
}

saludar('Pablo', 30, true , 'Málaga')
saludar2('Elle')
saludarFecha('Flecha')