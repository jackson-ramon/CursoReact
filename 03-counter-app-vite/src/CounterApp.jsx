import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ( { value } ) => {

    // El primer elemento del arreglo toma el valor de 
    // la variable "value"
    // El segundo elemento del arreglo es una funcion que
    // permite cambiar el valor y el estado del primer elemento
    const [ counter, setCounter ] = useState( value );

    const handleAdd = (  ) => { 
        // console.log(event);
        
        // Modificar el counter
        // Fomrma 1:
        setCounter( counter + 1 );

        // Forma 2:
        // setCounter( (c) => c + 1 )
    };

    const handleSubtract = () => setCounter( counter - 1 );

    const handleReset = () => setCounter( value );

  return (
    <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>

        <button onClick={ handleAdd }> +1 </button>
        <button onClick={ handleSubtract }> -1 </button>
        <button onClick={ handleReset }> Reset </button>
    </>
  )
}


CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}