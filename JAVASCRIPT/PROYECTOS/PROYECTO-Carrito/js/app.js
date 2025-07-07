


// Variables
const carrito           = document.querySelector('#carrito')
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarrito     = document.querySelector('#vaciar-carrito')
const listaCursos       = document.querySelector('#lista-cursos')

let articulosCarritos = []

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
    
    // console.log(curso);

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

    // Agrega elementos al array del carrito
    articulosCarritos = [...articulosCarritos, infoCurso]

    console.log(articulosCarritos);

    carritoHTML()
    
}


// Muestra el carrito de compras en el HTML
function carritoHTML(){

    // Limpiamos el HTML
    limpiarHTML()

    // Recorre el carrito y genera el HTML
    articulosCarritos.forEach( (curso) => {

        // crea un nuevo elemento html tr en la memoria del navegador
        const row = document.createElement('tr')

        // Hacemos destructuring para evitar poner curso. delante de todos
        const {imagen,titulo,precio,cantidad,id} = curso

        // Asigna el contenido HTML a esa nueva fila
        row.innerHTML = `
            <td><img src = "${imagen}" width ="100"</td>
            <td> ${titulo} </td>
            <td> ${precio} </td>
            <td> ${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
        `
        // Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row)

    })

}

// Elimina los cursos del tbody
// basicamente limpia
function limpiarHTML(){  

    // Mientras haya un hijo el elemento padre elimina un hijo por el primero
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }

}


cargarEventListeners() ;
