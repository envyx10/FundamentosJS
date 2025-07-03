// En este video estaremos viendo una introducción a querySelector

// querySelector va a retornar máximo 1 elemento, 
// si hay múltiples coincidencias solo va a retornar el primero

// Solo nos retorna el primer card
const card = document.querySelector('.card')
console.log(card);

// Podemos tener selectores especificos como en CSS
const info = document.querySelector('.premium .info')
console.log(info);

// Seleccionar el segundo card de hospedaje
const segundaCard = document.querySelector('section.hospedaje .card:nth-child(2)')
console.log(segundaCard);

// Seleccionar el form
// Selecciona el primero que encuentre primeroç
// Puedes mezclas clases con ids
const formulario = document.querySelector('#formulario')
console.log(formulario);

// Seleccionar elementos por su etiqueta HTML
const nav = document.querySelector('nav')
console.log(nav);



