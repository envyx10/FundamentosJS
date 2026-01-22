

export class Todo {

    /**
     * 
     * @param {String} descripcion 
     */
    constructor( descripcion ){

        this.id = 1;
        this.description = descripcion
        this.done = false;
        this.createdAt = new Date();

    }

    
}