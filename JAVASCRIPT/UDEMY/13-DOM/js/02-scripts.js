// En este video estaremos viendo como seleccionar elementos por su clase...

// Seleccionando el header...

// De esta manera seleccionamos nuestro header
const header = document.getElementsByClassName('header')
console.log(header);

// De esta manera seleccionado nuestro hero
const hero = document.getElementsByClassName('hero')
console.log(hero);

// Si las clases existen mas de 1 vez 
// De esta forma te muestra todos los elementos que tengan esta clase
const contenedores = document.getElementsByClassName('contenedor')
console.log(contenedores);

// Si una clase no existe
// Te devuelve un array vacio
const noExiste = document.getElementsByClassName('no-existe')
console.log(noExiste);
