


/* 

2C = Two of Clubs 
2D = Two of Diaminds 
2H = Two of Heart 
2S = Two of Spades

*/


let deck         = []
const tipos      = [ 'C','D','H','S']
const especiales = [ 'A','J','Q','K']

let puntosJugador   = 0,
    puntosMaquina   = 0,
    puntosOrdenador = 0

// Referencias del HTML
const btnPedir   = document.querySelector('#btnPedir') 
const btnDetener = document.querySelector('#btnDetener') 

const puntosHTML = document.querySelectorAll('small')

const divCartasJugador = document.querySelector('#jugador-cartas')
const divCartasMaquina = document.querySelector('#ordenador-cartas')



/**
 * Esta funcion crea una nueva baraja
 * @returns 
 */
const crearDeck = () => {

    for ( let i = 2 ; i <= 10  ; i++ ){
        
        for( let tipo of tipos) {
            deck.push( i + tipo)
        }
    }

    for ( let tipo of tipos ) {

        for( let especial of especiales){
            deck.push( especial + tipo)
        }

    }

  
    deck = _.shuffle(deck)
    console.log(deck); 

    return deck
}

crearDeck()


/**
 * Funcion que permite tomar una carta
 * @returns 
 * 
 * Tarea: crear const carta // extraer del deck una carta de manera aleatoria
 * 
 */
const pedirCarta = () => {

    if ( deck.length === 0){
        throw 'No hay cartas en el Deck'
    }

    const carta = deck.pop();
        console.log(deck);

    return carta

}

pedirCarta()  


/**
 * Valor de cada carta
 */
const valorCarta = ( carta ) => {

    //  substring() método devuelve un subconjunto de un objeto String.
    const valor = carta.substring( 0 , carta.length -1 ) 

    return ( isNaN( valor ) ) ? 
           ( valor === 'A' ) ? 11 : 10 
           : valor * 1         
    
}

// Turno de la maquina

const turnoMaquina = ( puntosMinimos ) => {

    do {
        
        const carta = pedirCarta()

        puntosMaquina += valorCarta(carta);
        puntosHTML[1].innerText = puntosMaquina;

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png` 
        imgCarta.classList.add('carta');

        divCartasMaquina.append( imgCarta )

        if ( puntosMinimos > 21 ){
            break;
        }

    } while (  ( puntosMaquina < puntosMinimos )  && ( puntosMinimos <= 21 ));


    setTimeout(() => {

        if(  puntosMaquina === puntosMinimos ) {
            alert('Nadie gana')
        } else if ( puntosJugador > 21) {
            alert('Jugador eliminado, gana la IA')
        } else if ( puntosMaquina > 21) {
            alert('Jugador gana')
        } else {
            alert('IA siempre gana')
        }

    }, 20 )

}







// Eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta()

    console.log(carta);
    console.log(puntosJugador);

    puntosJugador += valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;

    /*  
        Debemos conseguir crear esto pero de manera dinamica:
        <img class= "carta" src="assets/cartas/10D.png">
    */

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png` 
    imgCarta.classList.add('carta'); // Agregamos la clase de css que tenia nuestro class=""

    // En JavaScript, append() sirve para añadir uno o más elementos 
    // o nodos de texto al final de otro elemento que ya existe en tu página web (en el DOM).
    divCartasJugador.append( imgCarta )

    if( puntosJugador > 21) {
        console.warn('Lo siento, has perdido');    
        // Aqui le decimos al boton que si se cumple la condicion, deshabilite el botón
        btnPedir.disabled = true
        btnDetener.disabled = true

        turnoMaquina(puntosJugador)

    } else if ( puntosJugador === 21) {
        console.warn('21, genial!');
        btnPedir.disabled = true
        btnDetener.disabled = true

         turnoMaquina(puntosJugador)
    }

})


btnDetener.addEventListener('click' , () => {

    btnPedir.disabled = true
    btnDetener.disabled = true

    turnoMaquina( puntosJugador )

})

