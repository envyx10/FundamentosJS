


// Variables
const carrito           = document.querySelector('#carrito')
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarrito     = document.querySelector('#vaciar-carrito')
const listaCursos       = document.querySelector('#lista-cursos')


cargarEventListeners() ;

function cargarEventListeners() {
        // Cuando agregas un curso presionando '' Agregar ''
        listaCursos.addEventListener('click', agregarCurso)
}


// Funciones
function agregarCurso(e){

    e.preventDefault() // Evitamos el salto que hace hacia el herosection al pulsar el boton

    // Basicamente si la clase contiene agregar-carrito, mostramos el log '' agregando al carrito ''
    if(e.target.classList.contains('agregar-carrito')){
        console.log(e.target);
    }
    

}