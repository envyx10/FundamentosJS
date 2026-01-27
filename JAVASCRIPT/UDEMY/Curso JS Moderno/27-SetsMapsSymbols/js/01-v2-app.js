const carrito = new Set();

carrito.add('Camiseta');
carrito.add('Pantalón');
carrito.add('Zapatos');

console.log('--- OPCIÓN 1: forEach (La forma compatible) ---');

/**
 * EL MISTERIO DE LOS ARGUMENTOS:
 * 1. valor (producto): El elemento actual (Ej: "Camiseta").
 * 2. llave (index):    En un Array sería el número 0. 
 * PERO en un Set no hay números.
 * Así que JS repite el valor. "Camiseta".
 * 3. setOriginal:      El Set completo que estamos recorriendo.
 */

// Es útil si vienes de usar Arrays y no quieres cambiar la lógica,
// pero es redundante y no puedes usar 'break' para salirte.
carrito.forEach( (valor, llave, setOriginal) => {
    // Fíjate aquí: ¡Es lo mismo que el valor!
    console.log(`Valor: ${valor}, Llave Fake: ${llave}`); 
});


console.log('\n--- OPCIÓN 2: for...of (La forma recomendada) ---');

/**
 * POR QUÉ ES MEJOR:
 * 1. Sintaxis más limpia: Sin argumentos falsos.
 * 2. Control total: Puedes usar 'break' o 'continue'.
 * 3. Legibilidad: Se lee como "Por cada producto DE el carrito".
 */

for (const producto of carrito) {
    console.log(`Producto: ${producto}`);
    
    // Ejemplo de poder: Si encuentro Pantalón, paro el bucle.
    if(producto === 'Pantalón') {
        console.log('¡Encontré el pantalón! Parando búsqueda...');
        break; // Esto en forEach daría error
    }
}

/* CONCLUSIÓN:
   Usa forEach solo si necesitas compatibilidad estricta con funciones de Arrays.
   Para todo lo demás, for...of es el rey de los Sets.
*/