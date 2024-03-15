
const activo = true;

// let mensaje = '';

// if ( activo ) {
//     mensaje = 'Activo'
// } else {
//     mensaje = 'Inactivo'
// }

// const mensaje = ( !activo ) ? 'Activo' : 'Inactivo';
// const mensaje = ( !activo ) ? 'Activo' : null;

const mensaje1 = activo && 'Activo';
const mensaje2 = !activo && 'Activo';

console.log(mensaje1 );
console.log(mensaje2 );