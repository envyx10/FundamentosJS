import { v4 as uuid } from "uuid"; // npm i uuid - paquete para generar ids que nunca se repitan

export class Todo {

    /**
     * 
     * @param {String} descripcion 
     */
    constructor( descripcion ){

        this.id = uuid(); // Con el paquete uuid hacemos que el id jamás se repita ya que matemáticamente esta creado para que sea imposible.
        this.description = descripcion
        this.done = false;
        this.createdAt = new Date();

    }

    
}