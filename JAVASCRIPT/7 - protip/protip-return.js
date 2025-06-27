
// Forma 1
function crearPersona( nombre, apellido) {

    return {
        nombre,
        apellido
    }

}

const persona = crearPersona( 'Pablo', 'Diaz')
console.log(persona);

// Forma mas pro
const crearPersona2 = (nombre, apellido) => ({nombre, apellido})
console.log(crearPersona2('Pablo', 'diaz'));

// Imprmite todos los argumentos de abajo
function imprimeArgumentos(){
    console.log(arguments);

}

imprimeArgumentos(10, true, false, 'pablo' , 'hola')


// Imprime todos los argumentos de abajo pero mediante ..args copia todos
// Despues del parametro args no puede haber nada mas
const imprimeArgumentos2 = (...args) => args
imprimeArgumentos2(10, true, false, 'pablo' , 'hola')


const imprimeArgumentos3 = (edad, ...args) => {
    return args
}

const [casado, vivo, nombre, saludo] = imprimeArgumentos3(10, true, false, 'pablo' , 'hola')
console.log({casado, vivo, nombre, saludo});


const {apellido} = crearPersona( 'Pablo', 'Diaz')
console.log(apellido);


