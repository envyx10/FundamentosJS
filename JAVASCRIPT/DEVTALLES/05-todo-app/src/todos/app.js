
// ?raw es algo especifico de vite
// Le dice, no intentes ejecturar el html, 
// simplemente copialo tal cual y pasalo a la variable html
import todoStore from '../store/todo.store';
import html from './app.html?raw';

/**
 * 
 * @param {String} elementId 
 */
export const App = ( elementId ) => {


    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        console.log(todos);
        
    }




    // Funcion anonima autoinvocada (IIFE)
    (() => {

        // Traducción: Crea una caja vacía de cartón (un <div>) en la memoria de JavaScript.
        // Ojo: Esta caja todavía está "flotando" en el aire (en memoria), 
        // no está puesta en la página web visible todavía.
        const app = document.createElement('div');

        // Aqui le decimos que meta en el div vacio creado con createElement
        // la variable html donde se encuentra copiado todo el html raw de la importación de arriba
        app.innerHTML = html ;

        //document.querySelector(elementId): 
        // Busca en la página web real el elemento con el ID que te pasaron (ej: #app). Encuentra el terreno.

        //.append( app ): 
        // Agarra la caja de cartón que preparamos (la variable app) y incrustala físicamente en ese terreno.
        document.querySelector(elementId).append( app );

    })();


}