// Un poco más sobre el rest operator...

// El rest operator es muy útil para crear un nuevo arreglo sin modificar el original...
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

const carrito = [
    { producto: 'Monitor 20 Pulgadas', precio: 500},
    { producto: 'Televisión 50 Pulgadas', precio: 700},
    { producto: 'Tablet', precio: 300},
    { producto: 'Audifonos', precio: 200},
    { producto: 'Teclado', precio: 50},
    { producto: 'Celular', precio: 500},
    { producto: 'Bocinas', precio: 300},
    { producto: 'Laptop', precio: 800},
];


console.warn('Spread Operator');

    // Esto no modifica el array original
    // Como podemos observar seguimos teniendo el mismo array enterito
    console.log(meses);

    // Este spread hace una copia de meses
    const meses2 = [...meses, 'Julio']
    console.log(meses2);
    

console.warn('Spread Operator, con objetos');

    const producto  = { producto: 'Disco Duro', precio: 300}

    // Ojo, para agregar el producto no debemos poner ...
    const carrito2 = [...carrito, producto]
    console.log(carrito2);
    