

// A diferencia de el código anterior de la carpeta - Problematica -
// esta version es mas correcta a la hora de hacer clases.

// Es buena practica hacerlo UpperCamelCase
// Sintaxis para la definicion de una clase

class Persona {

    // Definimos las propiedades inicializadas por defecto
    nombre = '' ;
    codigo = '' ;
    frase  = '' ;

    // Definimos el constructor con sus propiedades
    constructor(nombre, codigo, frase){

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;
           
    }

}

// Cramos instancias con las propiedades de la clase Persona
const spiderman = new Persona('Pablo', 1995, 'Tengo sueño');
const ironman = new Persona('Toni', 'IronMan', 'Yo soy ironman');

// Visualizamos el resultado
console.log(spiderman);
console.log(ironman);

