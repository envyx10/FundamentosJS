


/**
 * · Dias de semana abrimos a las 11,
 *   pero los fines de semana a las 9
 * 
 * 
 * · Entra a un sitio web, 
 *   para consultar si está abierto hoy
 */

const dia = 1// 0: domingo ...
const horaActual = 19

let horaApertura
let menaje // Está abierto, Está cerrado, hoy abrimos a las XX

// Version 1
if ( dia === 0 || dia === 6) {
    console.log('Fin de semana');
    horaApertura = 9
} else {
    console.log('Dia de semana');
    horaApertura = 11
}

if (horaActual >= horaApertura) {
    mensaje = 'Está abierto'
} else {
    mensaje = ` Está cerrado, abrimos a las ${horaApertura}`
}

console.log({horaApertura, mensaje});

// Version 2

// va a regregasar un true si existen dentro de los dos valores del array
if ([0,6].includes( dia )){
        console.log('Fin de semana');
    horaApertura = 9
} else {
    console.log('Dia de semana');
    horaApertura = 11
}


console.log({horaApertura, mensaje});


// Version 3 - condicion ternaria

horaApertura = ( [0,6].includes( dia ) ) ?  9 : 11
console.log({horaApertura});

// Ejercicio, hacerlo con el mensaje

mensaje = ( horaActual >= horaApertura) ? 'Está abierto' : ` Está cerrado, abrimos a las ${horaApertura}`
console.log({mensaje});

// protip en carpeta protips