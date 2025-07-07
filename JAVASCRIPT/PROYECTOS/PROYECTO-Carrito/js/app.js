


// Variables
const carrito           = document.querySelector('#carrito')
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarrito     = document.querySelector('#vaciar-carrito')
const listaCursos       = document.querySelector('#lista-cursos')

// Funciones
function cargarEventListeners() {
        // Cuando agregas un curso presionando '' Agregar ''
        listaCursos.addEventListener('click', agregarCurso)
}

function agregarCurso(e){

    e.preventDefault() // Evitamos el salto que hace hacia el herosection al pulsar el boton

    // Basicamente si la clase contiene agregar-carrito, mostramos el log '' agregando al carrito ''
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement
        leerDatosCurso(cursoSeleccionado)
    }
    
}


// Lee el contenido del HTML al que le dimos click y extrae la info del curso
function leerDatosCurso(curso){
    
    console.log(curso);

    // Objeto con el contenido del curso actual
    const infoCurso = {
        // En este caso agregamos curso. y no document, xq curso ya tiene el contexto del div entero
        imagen: curso.querySelector('img').src, // extraemos contenido del div - img
        titulo: curso.querySelector('h4').textContent, // extraemos contenido del div - titulo
        nombre: curso.querySelector('p').textContent, // extraemos contenido del div - nombre
        precio: curso.querySelector('.precio span').textContent, // extraemos contenido del div - precio
        id:     curso.querySelector('a').getAttribute('data-id'), // extraemos contenido del div - id
        cantidad: 1
        
    }

    console.log(infoCurso);
    
}


cargarEventListeners() ;
