


let a = 5;

// Los () esperan un valor bool
// Pero hay excepciones - undefined, null y una asignación
if (a >= 10) {
  console.log("A es mayor a 10");
} else {
  console.log("A es menor a 10");
}

// console.log('Fin de programa');

// New sirve para crear nuevas instancias o objetos
const hoy = new Date(); // Date te da la informacion de hoy

let dia = hoy.getDay(); // 0: Domingo, 1: Lunes , 2: Martes...
console.log({ dia });

// Triple === / funciona bien ( Respeta estrictamente el tipado )
// Triple == / funciona bien ( Confirma sin el dia es el valor = a 1 pero no le importa el tipo )
// Triple = / Aparece no es domingo cuando si ( = devuelve una asignación )

if (dia === 0) {
    console.log("Hoy es Domingo");
} else if ( dia === 1){
    console.log('Es lunes');
}