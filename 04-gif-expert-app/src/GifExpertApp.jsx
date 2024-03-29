import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch' ])

    const onAddCategory = (newCategory) => {
  
        // setCategories( [...categories, 'CS2'] );
        // setCategories( cat => [ ...cat, 'CS2' ] );

      if ( categories.includes(newCategory) ) return;

      setCategories( [ newCategory, ...categories ] );

    };

  return (
    <>
        { /* Titulo */ }
        <h1>GifExpertApp</h1>

        { /* Input */ }
        <AddCategory 
          // setCategories={ setCategories }
         onNewCategory={ (value) => onAddCategory(value) }
        />


      { /* Listado de Gif */ }
        { categories.map( ( category ) => (
              // return <li key={ category }>{ category }</li>
              <GifGrid 
                key={ category } 
                category={ category } />
            )) 
        }
        { /* Gif item */ }
    </>
  )
}
