import { Todo } from "../todos/models/todo.model";

// Objeto filter.
const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending',
}

/**
 * Este código simlemente esta llenando
 * el cajón con 3 tareas iniciales bien formadas, 
 * 
 * Crea un array de instancias de la clase Todo que llama al constructor de todo.model.js
 * Este crea 3 nuevas instancias con 3 strings predefinidos donde cada 1 tiene su propio identifcador
 * Identificador que se crea en el constructor
 */
const state = {
    todos:[
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo'),
    ],

    filter: 'Filters.All',
}

const initStore = () => {
    console.log(state);
    console.log('InitStore');
    
}


export default{
    initStore
}