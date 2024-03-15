
// Funciones en JS
const saludar = function( nombre ) {
    return `Hola, ${ nombre }`;
}

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;

const saludar4 = () => `Hola mundo`;

// console.log( saludar('Jackson') );

// console.log( saludar('Jackson') );
console.log( saludar2('Jackson') );
console.log( saludar3('Jackson') );
console.log( saludar4() );

// const getUser = () => {
//     return {
//         uid: 'ABC123',
//         username: 'JacksonR'
//     }
// };

const getUser = () => ({
    uid: 'ABC123',
    username: 'JacksonR'
});

const user = getUser();
console.log( user );

// Tarea
// 1. Transformar a una fucion flecha
// 2. Retornar un objeto implicito
// 3. Pruebas
const getUsuarioActivo = ( nombre ) => ({
    uid: "ABC587",
    username: nombre
});

const usuarioActivo1 = getUsuarioActivo('Jackson');
console.log( usuarioActivo1 );

const usuarioActivo2 = getUsuarioActivo('Juan');
console.log( usuarioActivo2 );

console.log( getUsuarioActivo('Alexander') );