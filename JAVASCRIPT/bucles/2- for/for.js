


const heroes = ['Batman' , 'Superman' , 'Mujer maravilla' , 'Aquaman']

console.warn('For tradicional');

  for( let i = 0 ; i < heroes.length ; i++ ) { // Sintaxis de un bucle for
    console.log(heroes[i]);
  }

console.warn('For in');

  for( let i in heroes ){ // Hace lo mismo del de arriba pero mucho mas simple la sintaxis
    console.log(heroes[i]);
  }

console.warn('For of');
// Hace lo mismo pero no encesitamos poner el objecto pero eso si
// En vez de poner i ponemos el singular del objeto
  for (let heroe of heroes) { 
    console.log(heroe);
  }