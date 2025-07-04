// Veamos lo que se conoce como Traversing the DOM

// Todo en JavaScript esta conectado en el document, la forma en que te moverás entre diferentes elementos se le conoce como Traversing the DOM, ir recorriendolo..

const navegacion = document.querySelector('.navegacion')

console.warn('Trae el primer elemento de navegacion');

    console.log(navegacion.firstElementChild);

console.warn('Trae el último elemento de navegacion');

    console.log(navegacion.lastElementChild);

console.warn('···');

// Los espacios en blanco son considerados elementos ( en este caso los saltos de linea )
console.log(navegacion.childNodes);

// Si lista elementos que sean codigo HTML, lista elementos reales
console.log(navegacion.children);

// Podemos acceder a su posicion como un array
console.log(navegacion.children[0]);

// Esto es un traversin de DOM
const card = document.querySelector('.card')

// Aqui recorro mi camino sobre los diferentes nodos o elementos 
// hasta llegar al contenido del texto

card.children[0].src = 'img/hacer2.jpg' // Modifico la imagen
console.log(card.children[0]);

// 

console.warn(' Del hijo al padre');

    console.log(card.parentNode);
    // Mismo resultado pero una forma mas segura
    console.log(card.parentElement); 

console.warn(' nextElementSibling ');

    // Nos selecciona el siguiente elemento
    console.log(card.nextElementSibling);

console.warn(' Con nth:child ');

    const ultimoCard = document.querySelector('.card:nth-child(4)')
    console.log(ultimoCard);


