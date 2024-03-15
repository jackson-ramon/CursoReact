import { getHeroeById } from "./bases/08-imp-exp";


// Promesas
// Son asincronas, y se ejecutan luego de ejecutarse
// la parte sincrona del programa

// const promesa = new Promise( (resolve, reject) => {

//     setTimeout( () => {
//         // Tarea
//         // importar el 
//         // const heroe = getHeroeById(2);
//         // resolve( heroe );

//         const p1 = getHeroeById(2);
//         // reject('No se pudo encontrar el héroe');
//         resolve( p1 );
//     }, 2000 )
// });

// promesa.then( (heroe) => {
//     console.log('heroe', heroe);
// })
// .catch( err => console.warn( err ) );

const getHeroeByIdAsync = (id)  => {

    return new Promise( (resolve, reject) => {

        setTimeout( () => {
            const p1 = getHeroeById(id);
            
            if ( p1 ) {
                resolve( p1 );
            } else {
                reject('No se pudo encontrar el héroe');
            }
        }, 2000 )
    });
}

getHeroeByIdAsync(2)
    .then( console.log )
    .catch( console.warn )