

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


// Ejemplo uso de un set

// Del siguiente array, eliminar los duplicados
const numeros = [10,20,30,40,50,10,20];

const noDuplicados = new Set(numeros);

console.log(noDuplicados);

if( noDuplicados.has(10)){
    noDuplicados.delete(10)
}

console.log(noDuplicados);
