// Otro Array Method que quiero mostrarte es  .reduce

// Si buscas la definición de que es una función reduce te dirá que es una función reductora...

// Pero basicamente es tomar una gran cantidad de datos y entregar un resultado..
// Supongamos que tenemos nuestro carrito de compras y queremos decirle al usuario cuanto es el total a pagar...

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

let total = 0 

console.warn('Con foreach');

    carrito.forEach( producto => total += producto.precio )
    console.log(total);

console.warn('Con reduce');

    // Se le pasan dos valores a reduce
    // 1 - El valor anterior
    // 2 - El valor actual
    let resultado = carrito.reduce((total , producto ) => total + producto.precio, 0)
    console.log(resultado);
 