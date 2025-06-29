


console.warn('Asignaciones');
    const soyUndefined = undefined
    const soyNull = null
    const soyFalso = false

    const a1 = true && 'Hola mundo' && 150  // asigna siempre el ultimo valor, al poner true
        console.log({a1});
    const a2 = false && 'Hola mundo' && 150 // no evalua nada al empezar con false
        console.log({a2});
    
    const a3 = 'Hola' && 'Mundo' // sale mundoo
         console.log({a3});

    const a4 ='Hola' && 'Mundo' && soyFalso // sale falso ( todas tiene que ser true con  && para que aperezca)
         console.log({a4});

    const a5 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' // regresa 'ya no soy un falso de nuevo'
        console.log({a5});
    
    
    