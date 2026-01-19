



class Rectangulo{

    // propiedad privdada
    #area = 0;

    constructor(base = 0, altura = 0){

        this.base = base;
        this.altura = altura

        this.#area = base * altura;

    }


}

const rectangulo = new Rectangulo(10,15);

// Si intentas hacer rectangulo.#area en la consola, JavaScript te lanzará un error de sintaxis: SyntaxError: 
// Private field '#area' must be declared in an enclosing class. Es inviolable.
// rectangulo.#area = 100


console.log(rectangulo);
