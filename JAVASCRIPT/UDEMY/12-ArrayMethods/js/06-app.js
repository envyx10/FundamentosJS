// En este video estaremos viendo every...

// Every es raro, ya que todos los elementos del arreglo deberán cumplir esa condición..
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

// revisa por todos
const resultado = carrito.every(producto => producto.precio < 1000)
console.log(resultado);

// revisa al menos que 1 cumpla 
const resultado2 = carrito.every(producto => producto.precio < 500)
console.log(resultado2);
