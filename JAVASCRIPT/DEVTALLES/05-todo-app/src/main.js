import './style.css'
import  { App } from './todos/app.js'
import todoStore from './store/todo.store.js'

todoStore.initStore();

/* 
  Este modulo es el Padre 
  Es quien le dice al Hijo lo que debe hacer
*/
App('#app');
