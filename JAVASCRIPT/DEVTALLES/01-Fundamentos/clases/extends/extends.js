

// A diferencia de el código anterior de la carpeta - Problematica -
// esta version es mas correcta a la hora de hacer clases.

// Es buena practica hacerlo UpperCamelCase
// Sintaxis para la definicion de una clase

class Persona {

    // 1. Propiedades y metodos estaticos
    // Definimos las propiedades inicializadas por defecto
    
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

// Herencia, si al crear otra clase vemos propiedades exactas a la de nuestra otra clase
// entonces extendemos de la clase Persona en este caso para no repetir los propiedades
class Heroe extends Persona{

    clan = ' sin clan ';

    constructor(nombre, codigo, frase){

        // Si dejaramos esto antes de super daria un fallo
        // Debemos declararlo despues de super()
        // this.clan = 'Avengers'

        // Super() palabra reservada
        // Se encarga de llamar al padre ya que Heroe al extender de Persona es el hijo de Persona
        super(nombre, codigo, frase);

        this.clan = 'Avengers'
    }

    quienSoy(){

        // Aqui sobreescribrimos el metoodo
        // OVERRIDE 
        console.log(`Soy ${this.nombre}, ${this.clan}`);

        // invocamos la implementación original del padre.
        super.quienSoy();
    }


}

// Cramos instancias con las propiedades de la clase Persona
const spiderman = new Heroe('Peter','Spiderman','Soy tu amigable vecino');

console.log(spiderman);
spiderman.quienSoy()