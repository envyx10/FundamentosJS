
/*  _ es una variable, una convencion del propio underscore que significa _  */
import _ from 'underscore' 

// import { crearDeck as crearNuevoDeck } from './usecases/crear-deck.js'
import { crearDeck as crearNuevoDeck, valorCarta, pedirCarta, turnoComputadora } from './usecases'

/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

// Este deck es totalmente indpendiente al de crear-deck.js es pura nomenclatura
let deck         = [];

const tipos      = ['C','D','H','S'],
      especiales = ['A','J','Q','K'];

let puntosJugador     = 0,
    puntosComputadora = 0;

// Referencias del HTML
const btnPedir   = document.querySelector('#btnPedir'),
      btnDetener = document.querySelector('#btnDetener'),
      btnNuevo   = document.querySelector('#btnNuevo');

const divCartasJugador     = document.querySelector('#jugador-cartas'),
      divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');

// Este deck es totalmente indpendiente al de crear-deck.js es pura nomenclatura
// Este deck es el de la linea 17
// deck = crearNuevoDeck( tipos, especiales );

// Nueva forma, ahora crearNuevoDeck() es de tipo array dado el comentario que pusimos en crear-deck.js
deck = crearNuevoDeck(tipos, especiales);


// Eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta( deck );
    
    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;
    
    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    divCartasJugador.append( imgCarta );

    if ( puntosJugador > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck );

    } else if ( puntosJugador === 21 ) {
        console.warn('21, genial!');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck );
    }

});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;

    turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck );
});

btnNuevo.addEventListener('click', () => {

    console.clear();
    deck = [];
    deck = crearNuevoDeck( tipos, especiales);

    puntosJugador     = 0;
    puntosComputadora = 0;
    
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled   = false;
    btnDetener.disabled = false;

});


