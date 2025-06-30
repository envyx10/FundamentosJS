


const regresaTrue = () => {
    console.log('Regresa true');
    return true
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false
}

console.warn('Not o la negacion')
    console.log(true);   // true
    console.log(!true);  // false
    console.log(!false); // true

console.log(!regresaFalse());
console.log(!regresaTrue());

console.warn('And') // En and && si hay 1 false aunque haya 20 trues, siemopre será false
    console.log( true & true);  // true
    console.log( false & true); // false
    console.log( true & false); // false

console.log( !true & false); // false
console.log( !false & !false); // true
console.log( !true & false); // false

console.log('==========='); 

// Operador and && si regresa falsa, ignora cualquier cosa que venga despúes 
console.log( regresaFalse() && regresaTrue()); // false

// En este caso al empezar por true continua 
console.log( regresaTrue() && regresaFalse()); // false

console.warn('OR'); // Lo opuesto a &&
    console.log( true || false );
    console.log( false || false );

    console.log(regresaTrue() || regresaFalse());
    

// Protip en la carpeta de 7 - protips

