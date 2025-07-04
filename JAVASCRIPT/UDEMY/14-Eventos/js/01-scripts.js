/* 

Todos los eventos utilizan el método en el document de addEventListener, este registra un evento en especifico, como puede ser un **click** en un enlace o imagen, **submit** a un formulario, o cuando el usuario escribe.

Sintaxis - **document.addEventListener** -  seguido del evento que estamos escuchando

*Uno que es muy común y utilizaras en todos tus proyectos es uno llamado **DOMContentLoaded***

*/


console.log(1); // Se ejecuta primero

// Este evento espera a que todo este listo
document.addEventListener('DOMContentLoaded', () => {
    console.log(2); // y este ultimo
})

console.log(3); // este despues 
