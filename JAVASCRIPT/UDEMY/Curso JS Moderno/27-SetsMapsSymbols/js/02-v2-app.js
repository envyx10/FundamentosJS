/**
 * ⚡ WEAKSET (Conjunto Débil)
 * ---------------------------
 * Es una versión especial del Set diseñada para optimizar memoria.
 *
 * ⚠️ REGLAS Y RESTRICCIONES:
 * 1. Solo acepta OBJETOS. (Strings, números, booleanos dan Error).
 * 2. NO es iterable (No forEach, no for...of, no spread [...]).
 * 3. NO tiene propiedad .size (No puedes saber cuántos hay).
 * 4. Métodos disponibles: .add(), .has(), .delete().
 */

const weakSet = new WeakSet();

// 1. Funciona con Objetos
const cliente = { nombre: 'Pablo', saldo: 200 };
weakSet.add(cliente); // ✅ Correcto

console.log(weakSet.has(cliente)); // true

// 2. Falla con primitivos
// weakSet.add('Juan'); // ❌ Error: Invalid value used in weak set

// 3. LA MAGIA (Garbage Collection)
let producto = { id: 1, titulo: 'Monitor' };
weakSet.add(producto);

console.log(weakSet.has(producto)); // true

// Si ahora hacemos que 'producto' deje de existir...
producto = null; 

// ...El WeakSet lo eliminará automáticamente de su memoria interna
// cuando pase el recolector de basura de JS.
// (No podemos comprobarlo con código porque no tiene .size, pero ocurre).

/*
   ¿CUÁNDO USARLO?
   Cuando quieras guardar datos extra sobre un objeto DOM o JS
   sin preocuparte de crear fugas de memoria (Memory Leaks).
   Si el objeto muere, el WeakSet lo olvida.
*/