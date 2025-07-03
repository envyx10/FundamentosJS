// Otro Array Method que quiero mostrarte es filter...
// Filter va a crearte un arreglo basado en un parametro que es evaluado..

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



let resultado

// te muestra lo que este por encima de 700
resultado = carrito.filter( producto => producto.precio > 700) 
    console.log(resultado);

resultado = carrito.filter (producto => producto.precio < 600)
    console.log(resultado);

// Trae todo excepto Audifonos
resultado = carrito.filter ( producto => producto.nombre !== 'Audifonos')
    console.log(resultado);

// Solo trae Audifonos
resultado = carrito.filter ( producto => producto.nombre === 'Audifonos')
    console.log(resultado);
