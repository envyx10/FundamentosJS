
// Hacemos uso de - this - para especificar el nombre
// Sin necesidad de usar el la propiedad - nombre - de la constante pablo 
// dado que si el nombre de la constante cambiará tendriamos que cambiarlo tambien dentro de esa función
const pablo = {
    nombre: 'Pablo',
    edad: 30,
    // usamos this y no pablo.
    imprimir(){ 
        console.log(`nombre: ${this.nombre} - edad: ${this.edad}`); 
    }

}

// pablo.imprimir();



// ============================================= // 


// La palabra reservada new le indica a JS que yo quiero crear una nueva instancia
const maria = new Persona('Maria', 18)
const melisa = new Persona('Melisa', 20)


// A estas alturas del partido ya no interesa trabajar de esta manera a menos que queramos trabajar para
// navegadores muy viejos.

// Aun asi esta bien verlo por si en algun momento dado nos encontramos codigo asi 

// La P mayuscula indica que es una funcion que nos va a permitir hacer instancias.
function Persona(nombre, edad) {
    console.log('Se ejecutó está linea');

    // This.nombre = nombre que recibimos como argumento
    this.nombre = nombre
    // This.edad = edad que recibimos como argumento
    this.edad = edad

    this.imprimir = function (){ 
        console.log(`nombre: ${this.nombre} - edad: ${this.edad}`); 
    }

    // En JS las funciones si no tiene un return explicito es como si tuviera un undefined

}

console.log(maria);
maria.imprimir()
melisa.imprimir()
