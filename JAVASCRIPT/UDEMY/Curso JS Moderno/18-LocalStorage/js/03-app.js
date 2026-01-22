


// Eliminar elementos con LocalStorage
// En LocalStore no existe un update
localStorage.removeItem('nombre')

// Lo que podemos hacer es asignarlo a otra variable y mediante
// push() agregar el nuevo mes en este caso.

const mesesArray = JSON.parse(localStorage.getItem('Meses')) || [];
console.log(mesesArray);

mesesArray.push('Nuevo mes');
console.log(mesesArray);

localStorage.setItem('Meses', JSON.stringify(mesesArray));

