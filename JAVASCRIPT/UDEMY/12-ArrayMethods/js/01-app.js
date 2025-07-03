// Previamente vimos algunos métodos para strings, para números y también para objetos...

// Veamos una serie de métodos muy útiles cuando se trabaja con arrays y algunos casos de uso

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];



// Si te gustaría saber si nuestro arreglo de meses, tiene el mes de Febrero, podrías hacerlo con un foreach...

// Comprobar si un valor existe en un array

meses.forEach(mes => {
    if(mes === 'Enero') {
        console.log('Enero si existe...')
    } else {
        console.log('No se encuentra el mes');
        
    }
})

// O también podrías utilizar el Array Method de .includes

console.warn('prueba includes');

    const resultado = meses.includes('Marzo'); // Cambiar a Diciembre...
    console.log(resultado);

console.warn('fin prueba includes');


console.warn('prueba some');

    // En el caso de un arreglo de objetos... .includes no es la mejor opción, 
    // podrías utilizar uno llamado .some

    // Con return
    const existe1 = carrito.some ( producto => {
        return producto.nombre === 'Celular'
    })
    console.log(existe1);
    
    // Sin return - Al tener solo un return, se puede quitar y quedar asi
    const existe = carrito.some( producto => producto.nombre === 'Celular' );
    console.log(existe);

    // Some en un arreglo tradicional...
    const existe2 = meses.some( mes => mes === 'Febrero' );
    console.log(existe2);

console.warn('fin prueba some');
