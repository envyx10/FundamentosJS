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
        new Todo('Piedra del poder'),
        new Todo('Piedra del luz'),
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
 * @param {string} filter 
 */
const getTodos = ( filter = Filters.All ) => {

    switch( filter ){

        case Filters.All:
            return [...state.todos];

        case Filters.Completed:
            return state.todos.filter( todo => todo.done);

        case Filters.Pending:
            return state.todos.filter( todo => !todo.done);

        default:
            throw new Error(`Option ${ filter } is not valid`)

    }

}


/**
 * 
 * @param {String} descripcion 
 */
const addTodo = ( descripcion ) => {
    
    if(! descripcion ) throw new Error( 'descripcion is required');
    state.todos.push( new Todo(descripcion));

}

/**
 * 
 * @param {String} todoId 
 */
const deleteTodo = ( todoId ) => {
    state.todos = state.todos.filter( todo => todo.id !== todoId );
}


/**
 * @param {String} todoId 
 */
const toggleTodo = ( todoId ) => {
    
    // Recorremos el array y creamos uno nuevo con las modificaciones
    state.todos = state.todos.map( todo => {
        
        // 1. ¿Es este el muñeco que busco?
        if( todo.id === todoId ) {
            // 2. SÍ: Le doy la vuelta a su estado (Flip)
            todo.done = !todo.done;
        }

        // 3. Devuelvo el muñeco (ya sea el modificado o el original)
        return todo;
    });

}

/**
 * 
 */
const deleteCompleted = () => {
    state.todos = state.todos.filter( todo => !todo.done );
}

/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = ( newFilter = Filters.All) => {
    state.filter = newFilter;
}


const getCurrentFilter = () => {
    return state.filter
}



export default{
    initStore,
    loadStore,
    getTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    getCurrentFilter,
    setFilter,
}