


/* 

2C = Two of Clubs 
2D = Two of Diaminds 
2H = Two of Heart 
2S = Two of Spades

*/


let deck         = []
const tipos      = [ 'C','D','H','S']
const especiales = [ 'A','J','Q','K']

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

    return ( isNaN( valor ) ) ? ( valor === 'A' ) ? 11 : 10 
                                                       : valor * 1         
     

}

const valor = valorCarta('5D')
console.log(valor);
