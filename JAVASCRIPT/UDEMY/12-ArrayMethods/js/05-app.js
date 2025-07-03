// en este video estaremos viendo FIND.

// fiND te creará un arreglo nuevo en base al primer resultado que sea true...

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


console.warn('Con foreach');

    let resultado = ''
    carrito.forEach((producto, index) => {
        if(producto.nombre === 'Tablet'){
            resultado = carrito[index]
        }
    })

    console.log(resultado);

console.warn('Con find');

    const resultado2 = carrito.find(producto => producto.nombre === 'Tablet')
    console.log(resultado2);
