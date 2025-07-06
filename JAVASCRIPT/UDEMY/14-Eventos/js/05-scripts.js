


window.addEventListener('scroll' , () => {
    
    // Nconst scrollPX = window.scrollY // scroll en el eje Y
    // console.log(scrollPX);
    
    const premium = document.querySelector('.premium')
    const ubicacion = premium.getBoundingClientRect()

    if(ubicacion.top < 100){
        console.log('El elemento ya esta visible');
    } else {
        console.log('Todavia no');
        
    }

})
