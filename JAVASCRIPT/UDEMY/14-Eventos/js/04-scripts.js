
const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', validarForumario )

function validarForumario( e ){

    e.preventDefault(); 

    console.log('Consultar una API ...');
    console.log(e.target.action)

}