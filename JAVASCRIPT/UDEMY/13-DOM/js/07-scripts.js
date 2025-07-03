// En JavaScript también es posible cambiar el CSS de un elemento, 
// o agregar o quitar classes...


// Vamos a cambiar el color de texto del h1

// const encabezado = document.querySelector('h1')

// Aqui le estamos diciendo que el h1 que tenemos seleccionado 
// le cambie el color de fondo a red


/* 
    encabezado.style.backgroundColor = 'red'
    encabezado.style.fontFamily = 'Arial'
    encabezado.style.textTransform = 'uppercase' 
*/


const card = document.querySelector('.card')

// Con classList.add podemos agregar nuevas clases al DOM
card.classList.add('nueva-clase' ,'segunda-clase')

// Con classList.remove podemos eleminar clases ya creadas 
card.classList.remove('card')

console.log(card.classList);

