// import React, { useState, useEffect } from 'react'
// import getGifs from '../helpers/getGifs' // función para hacer fetch a giphy 
import { GifGridItem } from './GifGridItem'

import { useFetchGifs } from "../hooks/useFetchGif"

export const GifGrid = ({ category }) => {


    // permite que la función solo se ejecute una vez cuando se carga el doc
    // no se hace la petición cada vez que se detecte un evento 
    // llama a la función al inicio del renderizado y no la vuelve a llamar 

    // --------------------------------fecth--------------------------------
    // const [images, setImages] = useState([])
    // useEffect(() => {
    //     // retorna una promesa
    //     getGifs(category)
    //         .then(imgs => setImages(imgs)); // almacena resultado 
    // }, [category])

    // -----------------------------custom hook----------------------------- 
    const { data: images, loading } = useFetchGifs(category);
    // console.log(images);
    // console.log(loading);


    // getGifs();
    return (
        <>
            <h2>{category}</h2>

            {/* custom hook */}
            {loading ? <p className="animate__animated animate__flash">'Loading ...'</p> : null}

            <div className='card-grid'>

                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }

                {/* llamada al componente */}
                {/* ejemplo 1 */}
                {/* {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                } */}



                {/* ejemplo 2 */}
                {/* lista de elementos por categoria
            <ol>
                {
                    images.map(img => (
                        <li key={img.id}>{img.title}</li>

                    ))
                }
            </ol> */}
            </div>
        </>
    )
}
