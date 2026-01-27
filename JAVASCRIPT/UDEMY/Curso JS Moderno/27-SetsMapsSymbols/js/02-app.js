


// WeakSet
// No son iterables
// No puedes usar .size()

// A diferencias del set, solamente le puedes pasar o agregar objetos
const weakset = new WeakSet();

const cliente = {
    nombre: 'Pablo',
    saldo: 200
};

const nombre = 'Pablo';

weakset.add(cliente); // No da error ya que cliente es un objeto
// weakset.add(nombre); // Da error ya que solo aceptan objetos y nombre es un string 

// Al igual que set tiene el metodo .has()
console.log(weakset.has('cliente'));

// weakset.delete(cliente); // Eliminamos el valor como en set


console.log(weakset);
