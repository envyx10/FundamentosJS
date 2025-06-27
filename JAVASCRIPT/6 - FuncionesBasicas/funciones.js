
// Funcion basica
function saludar(nombre) {

    // console.log(arguments);
    // console.log(`Hola ${nombre}`);

    return [1,2,3,4,5];

    // cualquier cosa que esta debajo de un return no se ejecuta
    console.log('Soy un código que está después del return');
    
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

const retornoDesaludar = saludar ('Pablo', 30, true , 'Málaga') // 1
console.log(retornoDesaludar);

// saludar2('Elle')
// saludarFecha('Flecha')

function sumar(a,b){
    return a + b
}

console.log(sumar(1,2));

// Si solo tenemos una linea y es return podemos hacerlo de esta manera tambien
const sumar2 = (a,b) => a + b

console.log(sumar2(2,2));

// Devolvemos mediante Math una funcion que de manera random te da un numero 
function getRandom(){
    return Math.random();
}

console.log(getRandom());

// Misma forma con function arrow y al ser 1 unico return, se omite
const getRandom2 = () => Math.random()

console.log( getRandom2() );
