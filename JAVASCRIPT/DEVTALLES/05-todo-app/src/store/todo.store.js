import { Todo } from "../todos/models/todo.model";

// Es documento es totalmente agnostico al template html



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

/**
 * 
 */
const initStore = () => {
    console.log(state);
    console.log('InitStore');
    
}


/**
 * 
 */
const loadStore = () => {
    throw new Error('No implementado');
}

/**
 * 
 * @param {String} descripcion 
 */
const addTodo = ( descripcion ) => {
    throw new Error('No implementado');
}

/**
 * 
 * @param {String} todoId 
 */
const toggleTodo = ( todoId ) => {
    throw new Error('No implementado');

}

/**
 * 
 * @param {String} todoId 
 */
const deleteTodo = ( todoId ) => {
    throw new Error('No implementado');

}

/**
 * 
 */
const deleteCompleted = () => {
    throw new Error('No implementado');

}


const getCurrentFilter = () => {
    throw new Error('No implementado');

}


/**
 * 
 * @param {*} newFilter 
 */
const setFilter = ( newFilter = Filters.All) => {
    throw new Error('No implementado');
}


export default{
    initStore,
    loadStore,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    getCurrentFilter,
    setFilter
}