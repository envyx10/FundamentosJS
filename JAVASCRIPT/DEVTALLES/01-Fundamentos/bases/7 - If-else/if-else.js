


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


// Ejercicio sin usar if else o switch, únicamente objetos o arrays para realizar la misma tarea 
// e imprimir la tarea 

const diasLetras = { // Mi forma
  domingo: 0,
  lunes: 1, 
  martes: 2, 
  miercoles: 3, 
  jueves: 4, 
  viernes : 5, 
  sabado: 6, 
} 

console.log(diasLetras.miercoles);

// Con array
diararo = 5
const diasLetrasArray = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sábado']
console.log(diasLetrasArray[diararo]);

// Resultado de devtalles
const diasLetras2 = { 
  0: 'domingo',
  1: 'lunes', 
  2: 'martes', 
  3: 'miercoles', 
  4: 'jueves', 
  5: 'viernes', 
  6: 'sabado', 
}

dia1 = 3

console.log(diasLetras2[dia1] || 'Dia no definido');

// Resultado de talles forma 2
const diasLetras3 = { 
  0: ()=> 'domingo - 0',
  1: ()=> 'lunes - 1', 
  2: ()=> 'martes - 2', 
  3: ()=> 'miercoles - 3', 
  4: ()=> 'jueves - 4', 
  5: ()=> 'viernes - 5', 
  6: ()=> 'sabado - 6', 
}

dia2= 3
console.log(diasLetras3[dia2]() || 'Dia no definido');



