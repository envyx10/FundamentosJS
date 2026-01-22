


// variables
// Seleccionamos el formulario entero del html.
const formulario = document.querySelector('#formulario');


const lista = document.querySelector('lista-tweets');

let tweets = [];


// Event Listeners
eventListeners();

// Al pulsar el boton ( el input ) dispara este evento
// Con esta funcion creamos la conexión 
function eventListeners(){

    // Traduccción: "Formulario, quédate escuchando. Cuando ocurra un 'submit', ejecuta la función 'agregarTweet'"
    formulario.addEventListener('submit' , agregarTweet);

    // addEventListener es el '' pegamento ''
    // tiene dos argumentos, en este caso ' submit ' es el tipo de evento que estamos esperando ( que ocurre al pulsar el botón )
    // El segundo argumento es la funcion que queremos que se active cuando el botón sea pulsado

}

// Funciones
function agregarTweet(e){

    // Aqui preventDefault() previene el comportamiento por defecto
    // Le dice al navegador '' No recargues la página ni envies nada al servidor todavia
    e.preventDefault();
    console.log('Agergando Tweet');
    
}
