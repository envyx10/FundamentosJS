

// Clave / valor 
// Nombre es la clave y pablo el valor
// Solo almacena strings nada mas.
localStorage.setItem('nombre', 'Pablo')

// Si creamos por ejemplo un objeto
// donde tenemos un string y un numero
const producto = {
    nombre: ' Monitor 24 pulgadas ',
    precio: 300
}

// Lo que debemos hacer es pasarlo todo a string para que lo acepte
const productoToString = JSON.stringify(producto)

// Si solo pusieramos 1 unico valor como argumento daria un error
// Para ello ponemos clave valor
// Clave: prodcuto 
// Valor: El producto pasado a string
// De esta forma podemos guardar un objeto como localStorage.
localStorage.setItem('producto', productoToString)

// Aqui hacemos lo mismo con un array de meses
const meses = [ 'Enero', 'Feb', 'Marz'];
const mesesToString = JSON.stringify(meses);
localStorage.setItem('Meses', mesesToString)
