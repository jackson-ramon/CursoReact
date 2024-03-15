
// Desestructuracion de arreglos
const personajes = ['Goku', 'Vegeta', 'Trunks'];

// console.log( personajes[0] );
// console.log( personajes[1] );
// console.log( personajes[2] );

const [ , , p3 ] = personajes;
console.log( p3 );

const retornarArreglo = () => {
    return ['AABC', 123]
}

const [letras, numeros] = retornarArreglo();
console.log(letras, numeros);


// Tarea
// 1. el primer valor del arr se llamará nombre
// 2. se llamará setNombre
const estadoUso = ( valor ) => {
    return [ valor, ()=> { console.log('Hola mundo') } ];
}

const [nombre, setNombre] = estadoUso( 'Goku' );
//arr[1]();
console.log( nombre );
setNombre();