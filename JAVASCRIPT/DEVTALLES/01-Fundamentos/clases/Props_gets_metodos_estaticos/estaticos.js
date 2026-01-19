

// A diferencia de el código anterior de la carpeta - Problematica -
// esta version es mas correcta a la hora de hacer clases.

// Es buena practica hacerlo UpperCamelCase
// Sintaxis para la definicion de una clase

class Persona {

    // 1. Propiedades y metodos estaticos
    // Definimos las propiedades inicializadas por defecto

    // propiedad estatica
    // el _ es una convencion de '' caballero ''antigua para decir '' no toques esto, es privado ''
    // En TS O JS muy moderno se usa #conteo o private static conteo.
    static _conteo = 0 ;

    // Get estatico 
    static get conteo(){
        return Persona._conteo + ' instancias'
    }

    // Método estatico
    static mensaje(){
        console.log(this.nombre); // debe dar undefined
        console.log('Hola a todos, soy un metodo estatico');

    }
    
    nombre = '' ;
    codigo = '' ;
    frase  = '' ;
    comida = '' ;

    // 2. Constructor
    // Definimos el constructor con sus propiedades
    // constructor es una palabra reservada
    // Si cambiamos la palabra, dejaria de funcionar.
    constructor(nombre, codigo, frase){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;  

        // Para trackear o contar cuantas instancias tenemos.
        Persona._conteo++;
    }

    // 3. Sets y gets
    // set para establecer un valor
    // es necesario agregar el argumento que reciben
    // Solo recibe un argumento
    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase();
    }

    // El get es para recuperar una propiedad construida
    // Siempre en un get es conveniente que regrese algo, para ello usamos return
    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`
    }

    // 4. Métodos
    // Se acostumbra a poner debajo del constructor los métodos
    // Esta es la forma de crear un metodo.
    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase(){
        console.log(`${this.codigo} dice ${this.frase}`);
    }

}

// ======================================================================= //

// Cramos instancias con las propiedades de la clase Persona
const spiderman = new Persona('Pablo', 1995, 'Tengo sueño');
const ironman   = new Persona('Toni', 'IronMan', 'Yo soy ironman');

console.log(spiderman);

// Contamos el numero de instancias
console.log(`conteo estatico`, Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

