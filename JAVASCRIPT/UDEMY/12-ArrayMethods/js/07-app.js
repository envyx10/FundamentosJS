// En este video veremos como unir 2 arreglos, para ello existe un arreay method llamado .concat

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
const meses2 = ['Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

console.warn('Concat');

    const meses3 = meses.concat(meses2,'Otro mes')
        console.log(meses3);


console.warn('Spread operator');

    const resultado2 = [...meses, ...meses2]
        console.log(resultado2);
