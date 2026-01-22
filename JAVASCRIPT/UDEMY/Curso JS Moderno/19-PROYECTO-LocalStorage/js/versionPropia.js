



//? ESTO ES UNA VERSION CON ARROW FUNCTION SIMPLIFICANDO EL CÓDIGO
//? ESTO ES UNA ALTERNATIVA QUE HE DESCUBIERTO SIN EL CURSO

const formulario = document.querySelector('#formulario');
const lista = document.querySelector('lista-tweets');

let tweets = [];

/**
 *  Evento que el usuario al pulsar el
 *  boton envia por consola dicho mensaje.
 */
function eventListeners(){

    formulario.addEventListener('submit' , (e) => {
        
        e.preventDefault();
        console.log('Agergando Tweet');
  
        const tweet = document.querySelector('#tweet').value;
        console.log(tweet);

        if(tweet === ''){

            console.log(' Debes escribir algún mensaje');
            return 

        }

        console.log('hola');

    });

}

eventListeners();