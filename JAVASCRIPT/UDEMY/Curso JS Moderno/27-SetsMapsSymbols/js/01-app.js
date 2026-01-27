

// Instancia un nuevo Set y lo almacena en carrito
const carrito = new Set();

// Los sets no tienen valores repetidos
// Pero el keysensitve, si tiene una mayus ya lo daria como valor diferente
carrito.add('camiseta'); 
carrito.add('camiseta'); // Se repite y no se enseña
carrito.add('Disco 1'); 
carrito.add('Disco 2'); 
carrito.add('Disco 3'); 

carrito.delete('Disco 2') //  Esto elimina el elemento

// Revisa si el valor que se pone ya existe, devuelve true o false
console.log(carrito.has('Disco 3')); // true
console.log(carrito.has('Disco 6')); // false

console.log(carrito);
console.log(carrito.size); // .size es metodo para ver cuanto mide

carrito.clear(); // Limpia todo el setç
console.log(carrito);

// Los sets son iterables
carrito.forEach( (producto, index, pertenece) => {
    //console.log(index);
    console.log(pertenece);
    
})

console.log(carrito);


// Ejemplo uso de un set - pregunta de entrevista
// Del siguiente array, eliminar los duplicados

// Imagina que este array viene de una base de datos y no sabes qué hay dentro
const numeros = [10, 20, 30, 40, 50, 10, 20, 50, 80, 10];

// PASO 1: La Magia del Set
// Al hacer 'new Set(numeros)', JavaScript recorre el array por ti.
// Coge el primer 10 -> Lo guarda.
// Coge el segundo 10 -> Ve que ya existe -> Lo ignora.
// Y así con todos.
const setUnico = new Set(numeros);

console.log(setUnico); // Set(5) { 10, 20, 30, 40, 50, 80 }


// PASO 2: Volver a tener un Array (Opcional pero recomendado)
// Usamos el Spread Operator [...] para sacarlos del Set y meterlos en un Array nuevo
const arrayLimpio = [...setUnico];

console.log(arrayLimpio); // [10, 20, 30, 40, 50, 80]