

// Seleccionamos el formulario entero del html.
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');

let tweets = [];

/**
 * Al pulsar el boton ( el input ) dispara este evento
 * Con esta funcion creamos la conexión 
 */
function eventListeners(){

    // Traduccción: "Formulario, quédate escuchando. Cuando ocurra un 'submit', ejecuta la función 'agregarTweet'"
    // formulario. es el id del html y del querySelector de la linea 6
    formulario.addEventListener('submit' , agregarTweet);

    // addEventListener es el '' pegamento ''
    // tiene dos argumentos, en este caso ' submit ' es el tipo de evento que estamos esperando ( que ocurre al pulsar el botón )
    // El segundo argumento es la funcion que queremos que se active cuando el botón sea pulsado
    // Su único trabajo es quedarse quieto en un sitio específico y esperar a que pase algo muy concreto para dar la alarma.

    // cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        console.log(tweets);
        crearHTML();
    })

}

eventListeners();

/**
 * 
 * @param {string} e 
 * @returns 
 */
function agregarTweet(e){

    // Aqui preventDefault() previene el comportamiento por defecto
    // Le dice al navegador '' No recargues la página ni envies nada al servidor todavia
    e.preventDefault();
    console.log('Agergando Tweet');

    // text area donde el usuario escribe, con .value accedemos a su valor
    // Basicamente cogemos el valor del text area y lo guardamos en la const tweet que posteriormente es llamada despues
    const tweet = document.querySelector('#tweet').value;
    console.log(tweet);

    // Validar en caso de que no haya texto
    // No sirve la validacion si el codigo se sigue ejectuando abajo
    if(tweet === ''){
       mensajeError(' Debes escribir algún mensaje');

        return // Evita que se ejecute mas lineas de codigo, este return funciona en un if siempre que este dentro de una funcion
    }

    // hacemos un objeto para tener un id con milisegundos, de esta manera tenemos un '' DNI '' único
    const tweetObj = {
        id:Date.now(),
        tweet // si nuestra clave / valor son iguales se puede dejar solamente 1 es decir, tweet: tweet

    }

    // spread operator
    // forma moderna y de buena practica sustitutiva al .push(), respeta la inmutabilidad
    // Respeta el original.
    // Copia lo que tiene ...tweet, lo pega en tweetObj y añade un nuevo objeto
    tweets = [...tweets, tweetObj];
    console.log(tweets);

    // funcion crear html
    crearHTML();
    
    // Reiniciar el formulario, asi no se queda nada guardado en el textArea
    formulario.reset()
    
}

/**
 * Funcion para avisar que hay un error a la hora de dejar vacio el textarea
 * @param {string} error 
 */
function mensajeError(error){

    // 1. ANTES DE CREAR NADA, revisamos si ya existe
    // Buscamos si hay algún elemento con la clase .error en el HTML
    const existeError = document.querySelector('.error');

    // 2. SI EXISTE, NO HACEMOS NADA (return mata la función)
    if (existeError) return; 
  
    // creamos un elemento ( una etiqueta p) y la guardamos en la variable mensajeError
    const mensajeError = document.createElement('p');

    // Con textContent almacenamos gracias al argumento de la funcion lo que se ponga una vez llamada
    // en este caso : 'Debes escribir algún mensaje' de la linea 50
    mensajeError.textContent = error;
    // Ahora a este texto le agregamos una clase llamada ' error ', .error teniene en el css un estilo
    mensajeError.classList.add('error');

    // Insertar en el contenido
    // con querySelecto, seleccionamos el id #contenido
    const contenido = document.querySelector('#contenido');
    // Una vez seleccionado mediante appendschild le especificamos que agrege el mensaje de error al final del div ( #contenido)
    contenido.appendChild(mensajeError);

    // Elimina la alerta despues de 3 segundos
    setTimeout(() => {
        mensajeError.remove()
    }, 3000);

}

/**
 * Funcion para crear elementos a la lista
 */
function crearHTML(){

    // Lo ponemos primero, es como si queremos corregir algo, primero lo borramos y luego aplicamos la correción
    limpiarHTML();

    if(tweets.length > 0){

        tweets.forEach( tweet => {

            // Agregar boton eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText ='X';

            // Funcion de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            //crear el HTML
            const li = document.createElement('li');
            // agregar el texto
            li.innerHTML =  tweet.tweet;
            // Asignar el boton
            li.appendChild(btnEliminar)
            // insertarlo en el html
            listaTweets.appendChild(li);
        } )

    }

    sincronizarStorage();   

}

/**
 *  Agrega los tweets actuales al LocalStorage
 */
function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets))

}

// Eliminar tweet
function borrarTweet(id){
    
    tweets = tweets.filter( tweet => tweet.id !== id);
    crearHTML();
}

/**
 * limpiar html para la redundancia de crearHTML
 */
function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}