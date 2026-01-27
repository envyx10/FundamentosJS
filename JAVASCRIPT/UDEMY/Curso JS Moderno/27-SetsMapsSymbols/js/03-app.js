


// Maps tienen mejor performance que un objeto
// Diseñado para creear / editar o elimar y recorrerlos

// Se crea igual que los sets
// Son listas de clave / valor

const client = new Map();

client.set('nombre','pablo');
client.set('tipo','pro');
client.set('saldo',3000);

console.log(client);

console.log(client.size); // te dice cuantos elementos hay
console.log(client.has('pablo')); // interesante, preguntar a geminis xq nombre que es la clave es true y pablo que es el valor false
console.log(client.get('nombre')); // extrae el valor de nombre en este caso

client.delete('saldo'); // borramos saldo
console.log(client.has('saldo')); // false
console.log(client.get('saldo')); // undefined

client.clear();
console.log(client); // borra todo el contenido

/////////////

// Array bidimensional
const paciente = new Map([['Nombre', 'Paciente'], ['Cuarto', 'No definido']]);
paciente.set('dr', 'dr asignado')

console.log(paciente);

// En este caso no es clave valor como argumentos sino valor / clave
paciente.forEach(( valor, clave ) => {
    console.log(`La clave es ${clave} y su valor es ${valor}`);

})