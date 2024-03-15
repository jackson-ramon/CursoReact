import { useLayoutEffect, useRef, useState } from "react"

export const PokemonCard = ({ id, name, sprites = [] }) => {
  
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })
  
  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({ height, width });

  }, [sprites]);
  
  return (
    <>
      <section style={{ height: 'auto' }}>
          <h2 className="text-capitalize">#{ id } - { name }</h2>

          { /* Imagenes */ }
          <div style={{ display: 'flex' }}>
              { 
                  sprites.map( sprite => (
                      <img ref={ pRef } key={ sprite } src={ sprite } alt={ name } />
                  ))
              }
          </div>
      </section>
      
      <code>{ JSON.stringify( boxSize ) }</code>
    </>
  )
}
