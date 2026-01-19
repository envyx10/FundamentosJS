


// Creamos un Singleton en JS
// Es una instancia unica de nuestra clase
// Singlenton se usa para garantizar el acceso a un RECURSO COMPARTIDO. 

class Singleton{

    // Instancia inicializada de nuestra clase
    //
    static instancia;
    nombre = '';

    constructor(nombre = ''){
   
        // console.log(a);   // undefined 
        // console.log(!a);  // true
        // console.log(!!a); // false
        

        // La doble negacion (!!) es un truco viejo de JS para convertir cualquier cosa en un Boolean puro
        // Desglose
        // Paso 0: Al principio, Singleton.instancia es undefined.
        // Paso 1 (Un !): !undefined se convierte en true (la negación de algo "falso/vacío" es verdadero).
        // Paso 2 (Dos !!): !true se convierte en false.

        // En el curso se usa doble negación pero actualmente se puede omitir y dejar la condicion como la tenemos ahora
         if(Singleton.instancia ){
            return Singleton.instancia
         }

        Singleton.instancia = this;
        this.nombre = nombre

    }

}

const instancia1 = new Singleton('xd'); // Al ser la primera instancia con Singleton todas valdran '' xd ''
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('Yo mismo');

console.log(`Nombre en la instancia1 es : ${instancia1.nombre}`);
console.log(`Nombre en la instancia1 es : ${instancia2.nombre}`);
console.log(`Nombre en la instancia1 es : ${instancia3.nombre}`);
