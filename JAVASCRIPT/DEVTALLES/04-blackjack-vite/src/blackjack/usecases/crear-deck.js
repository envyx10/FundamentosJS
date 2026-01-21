import _ from 'underscore';


// Este modulo crea una funcion que crea un nuevo deck
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    // Este deck es totalmente diferente al deck del index.js
    // No tienen nada que ver.

    // Nace la variable. Creas una caja vacía en la memoria de la función y le pegas una etiqueta que dice "deck".

    let deck  = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {

            // Se llena. Sigues usando la misma caja. Metes cartas dentro. La caja sigue siendo la misma, solo que ahora pesa más.

            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }

    //⚠️ OJO AQUÍ: _.shuffle NO baraja la caja original. Crea una COPIA NUEVA barajada.

    // Al poner deck = ..., estás arrancando la etiqueta "deck" de la caja vieja (ordenada) 
    // y pegándosela a la caja nueva (barajada).
    deck = _.shuffle( deck );
    
    // El repartidor saca esa última caja (la barajada) por la puerta.
    return deck;

}



