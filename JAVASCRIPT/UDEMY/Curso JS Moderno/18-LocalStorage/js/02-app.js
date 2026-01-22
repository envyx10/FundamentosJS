



// Si creamos por ejemplo un objeto
// donde tenemos un string y un numero

/* 
    LA DEFINICION DEL OBJETO
        const producto = {
            nombre: ' Monitor 24 pulgadas ',
            precio: 300
        } 

    Lo que debemos hacer es pasarlo todo a string para que lo acepte
        const productoToString = JSON.stringify(producto)

    El SET
        localStorage.setItem('producto', productoToString)

*/

// Recuperarmos mediante SET
const nombre = localStorage.getItem('producto')

// Lo que debemos hacer es pasarlo todo a string para que lo acepte
const productoToString = JSON.stringify(producto)


// JSON.parse
// Convierte una cadena de texto (string) 
// que tiene formato JSON en un objeto o valor de JavaScript.
console.log(JSON.parse(nombre)); // Esto devuelve un objeto


// SET del 01-app.js
// localStorage.setItem('nombre', 'Pablo')

// Aqui recuperamos mediante la clave del setItem el nombre '' pablo
// GET
const nombrePablo = localStorage.getItem('nombre')

console.log((nombrePablo)); // Esto devuelve '' Pablo ''



