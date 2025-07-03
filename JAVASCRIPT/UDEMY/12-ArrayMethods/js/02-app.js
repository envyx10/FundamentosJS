// El Segundo Array Method que quiero mostrarte es findIndex...

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

// Forma de hacerlo con forEach
console.warn('Forma con forEach');

    meses.forEach( (mes,i) => {

        if(mes === 'Abril') {
            console.log(`Encontrado en el indice ${i}`);
            
        }

    })

console.warn('Forma con findIndex');

    // Encontrar el Indice de abril con findIndex
    // Si buscas por un valor que no existe te devuelve -1
    const indice = meses.findIndex( i => i === 'Abril')
    console.log(indice);

    // Lo mismo con array de objetos ( en este caso coge la posicion 0 )
    const indice1 = carrito.findIndex( i => i.producto === 'Monitor 20 Pulgadas')
    console.log(indice1);

    // Tenemos varios 300 en el array de objetos pero solo retorna la posicion 2
    // Esto es porque findIndex solo retorna la primera coincidencia
    const indice2 = carrito.findIndex( i => i.precio === 300 )
    console.log(indice2);

