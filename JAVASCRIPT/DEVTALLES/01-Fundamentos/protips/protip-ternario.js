


// Condicional ternaria, al tener solo 1 return, se oprime
const elMayor = (a,b) => ( a > b ) ? a : b
    console.log(elMayor(20,15));

const tieneMembresia = ( miembro ) => (miembro) ? '2 Euros' : '10 Euros'
    console.log(tieneMembresia(false));

// depende de si es true o false, aparecera amigo o no ( thor o loki )
const amigo = false;
const amigosArr = [
    'Peter',
    'toni',
    'Dr. Strange',
    amigo ? 'thor' : ' loki'
]

    console.log(amigosArr);

const amigosArr1 = [
    'Peter',
    'toni',
    'Dr. Strange',
    amigo ? 'thor' : ' loki',
    (() => 'Nick Fury')() // Funcion anononima autoinvocada ( por los () )
]

    console.log(amigosArr1);


const nota = 10

// Ternario multiple
const grado = nota >= 95 ? 'A+' : 
              nota >= 90 ? 'A'  : 
              nota >= 85 ? 'B+' : 
              nota >= 80 ? 'B'  : 
              nota >= 75 ? 'C+' : 
              nota >= 70 ? 'C'  : 'F'

console.log({nota, grado});

                            