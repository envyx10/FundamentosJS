// querySelectorAll

// la buena noticia es que la sintaxis para selectores es la misma, es decir similar a CSS, con el punto para las classes y el numeral o signo de gato para los ID's, también puedes añadir un selector especifico.

// Pero la diferencia principal, es que querySelectorAll va a retornar todos los elementos que concuerden con el selector y no va a limitarte al primero como querySelector.

// En nuestro HTML hay muchos cards, cuando utilizamos querySelector vimos que retornaba unicamente el primero..


// Nos retorna un nodelist ( similar a un arrayList )
const card = document.querySelectorAll('.card')
console.log(card);

// Retorna todo da igual si sigues o no buenas practicas, hay que tener cuidado con eso
const formularios = document.querySelectorAll('#formulario')
console.log(formularios);

// Si un elemento no  devuelve un NodeList[] vacio
const noExiste = document.querySelectorAll('no-existe')
console.log(noExiste);
