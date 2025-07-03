


const coches = ['Ford','Honda','Mazda','Toyota']
let i = 0
let j = 0

console.warn('WHILE');

    // Se cumple siempre que la condicion dentro de los parentesis sea true
    while( i < coches.length ) {
        console.log(coches[i]);
        i ++
    }

    // continue deja continuar, es diferente al break
    while( coches[i] ) {
        if ( i === 1){
            i++ 
            continue
        } 
        console.log(coches[i]);
        i ++
    }

console.warn('DO WHILE');

    // Do while ejectua el bloque interno al menos 1 vez
    do {
        console.log(coches[j])
        j++
    } while (coches[j]);