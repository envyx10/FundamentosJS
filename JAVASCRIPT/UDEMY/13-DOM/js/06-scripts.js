// Seleccionar elementos del DOM nos va a permitir modificar 
// nuestro HTML y hacerlo más interactivo..

// Veamos por ejemplo como modificar el texto de la parte superior..


const encabezado = document.querySelector('.contenido-hero h1')
console.log(encabezado);

// Acceder al texto mediante JS

// InnerText no encuentra un texto oculto con visibility hidden
console.warn('InnerText');
    console.log(encabezado.innerText);

// Pero si lo va a encontrar con textContent
console.warn('textContent');
    console.log(encabezado.textContent);

// Se trae el texto y html entero
console.warn('innerHTML');
    console.log(encabezado.innerHTML);

console.warn('Misma linea');
// tambien puedes hacerlo en la misma linea
    const encabezado1 = document.querySelector('.contenido-hero h1').innerHTML
        console.log(encabezado1);

// Esto modifica el DOM y cambia nuestro h1 con el texto ' nuevo heading '
const encabezado2 = document.querySelector('.contenido-hero h1').innerHTML = 'nuevo heading'
        console.log(encabezado2);

// Esto modifica una imagen
const imagen = document.querySelector('.card img')
    console.log(imagen);
    
imagen.src = 'img/hacer3.jpg'

