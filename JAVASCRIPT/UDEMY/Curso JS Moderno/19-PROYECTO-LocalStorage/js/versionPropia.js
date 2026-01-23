



//? ESTO ES UNA VERSION CON ARROW FUNCTION SIMPLIFICANDO EL CÓDIGO
//? ESTO ES UNA ALTERNATIVA QUE HE DESCUBIERTO SIN EL CURSO

const formulario = document.querySelector('#formulario'),
      lista = document.querySelector('lista-tweets');

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

        });

}

eventListeners();