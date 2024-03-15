// NO se recomienda hacer que las funciones sean asincronas
// debido a que React dara problemas

// De momento es recomendable crear las funciones y variables
// de JS afuera del Functional Component

import PropTypes, { number } from 'prop-types';

// Functional component
export const FirstApp = ( { title, subTitle, name } ) => {

    // console.log(props);
    

  return (
    <>
        <h1>{ title }</h1>
        {/* <code>{ JSON.stringify( newMessage ) }</code> */}
        <p>{ subTitle }</p>
        <p>{ name }</p>
    </>
  )
}


FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
}

// Estos entran antes que los propTypes
FirstApp.defaultProps = {
    title: 'No hay titulo',
    subTitle: 'No hay subtitulo',
    name: 'Jackson Ramon',
}