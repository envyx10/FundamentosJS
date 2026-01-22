

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
    // formulario. es el id del html y del querySelector de la linea 6
    formulario.addEventListener('submit' , agregarTweet);

    // addEventListener es el '' pegamento ''
    // tiene dos argumentos, en este caso ' submit ' es el tipo de evento que estamos esperando ( que ocurre al pulsar el botón )
    // El segundo argumento es la funcion que queremos que se active cuando el botón sea pulsado
    // Su único trabajo es quedarse quieto en un sitio específico y esperar a que pase algo muy concreto para dar la alarma.

}

// Funciones
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
        console.log(' Debes escribir algún mensaje');

    }
    return // Evita que se ejecute mas lineas de codigo, este return funciona en un if siempre que este dentro de una funcion
    console.log('hola');
    
}


