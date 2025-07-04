


const primerEnlace = document.querySelector('a')
primerEnlace.remove() // con remove() eliminamos el elemento

// referencia desde el padre
const navegacion = document.querySelector('.navegacion')

// Identifica el indice del elemento y luego lo eliminas con removeChild ( tienes que pasarle la referencial del elemento que quieres eliminar)
navegacion.removeChild(navegacion.children[2])

console.log(navegacion.children);