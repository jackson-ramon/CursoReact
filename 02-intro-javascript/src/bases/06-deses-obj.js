
// Desestructuracion
// Asignacion desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}

// const { nombre, edad, clave } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );
// console.log( persona.edad );
// console.log( persona.clave );

const useContext = ( { clave, nombre, edad, rango = 'Capitan' } ) => {

    // console.log( nombre, edad, rango );
    
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 2.56556565,
            lng: -12.565546
        }
    }

}

const { nombreClave, anios, latlng:{ lat, lng } } = useContext( persona );
// const { lat, lng } = latlng

console.log( nombreClave, anios );
console.log( lat, lng );