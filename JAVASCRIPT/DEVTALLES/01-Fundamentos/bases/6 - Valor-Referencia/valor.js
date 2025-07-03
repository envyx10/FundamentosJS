

let a = 10
let b = a

a = 30

console.log({a, b}) // 10 10;

let juan = { nombre: 'Juan' }

let ana = { ...juan } // spread, simboliza separa los elementos
ana.nombre = 'Ana'

console.log({juan, ana}) // { nombre: 'Juan' } { nombre: 'Juan' }

const cambiarNombre = ( { ...persona } ) => {
    persona.nombre = 'tony';
    return persona
}


let peter = { nombre: 'Peter' }
let tony = cambiarNombre( peter )

console.log({peter, tony});


// Arrays

const frutas = ['manzana' , 'Peras' , 'Piña']

console.time('spread');
const otrasFrutas2 = [...frutas]
console.timeEnd('spread')

console.time('slice');
const otrasFrutas = frutas.slice()
console.timeEnd('slice')




otrasFrutas.push('mango')

console.table({frutas, otrasFrutas})