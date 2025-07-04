// Finalmente otro tema importante cuando trabajas con el DOM, es la creación de HTML desde JavaScript


// Para crear elementos nuevos .createElement
const enlance = document.createElement('A')
// Agregando el texto
enlance.textContent = 'Nuevo Enlance'
// Agregando href
enlance.href = '/nuevo-enlance'
// Agregando target
enlance.target = '_blank'

console.log(enlance);

// Seleccionamos la navegacion donde queremos meter el nuevo a
const navegacion = document.querySelector('.navegacion')

// Agregamos a la navegacion un nuevo hijo con · appendChild ·
navegacion.appendChild(enlance)

//

// Crear un card de forma dinamica
const parrafo1 = document.createElement('P')
parrafo1.textContent = 'Concierto'
parrafo1.classList.add('categoria', 'concierto')

const parrafo2 = document.createElement('P')
parrafo2.textContent = 'Concierto de rock'
parrafo2.classList.add('titulo')


const parrafo3=  document.createElement('P')
parrafo3.textContent = '800 euros x/ persona'
parrafo3.classList.add('precio')

// Creamos div con la clase de info

const info = document.createElement('div')
info.classList.add('info')
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3)

// Crear Img
const img = document.createElement('img')
img.src = 'img/hacer2.jpg'

// Crear card
const card = document.createElement('div')
card.classList.add('card')

// Asignar la imagen
card.appendChild(img)

// asignar info
card.appendChild(info)

// Con esta manera mostramos todo lo anterior en el html
const contenedor = document.querySelector('.hacer .contenedor-cards')
contenedor.appendChild(card)





