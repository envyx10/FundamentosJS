// En este video estaremos viendo como seleccionar un elemento por su ID, recuerda los ID's solo se deben utilizar uno con ese mismo nombre por documento...


// Los IDs deben ser únicos
// Busca por ID
const formulario = document.getElementById('formulario')
console.log(formulario);

// Cuando no existe, con getElementByID retorna null
const noExiste = document.getElementById('no-existe')
console.log(noExiste);

