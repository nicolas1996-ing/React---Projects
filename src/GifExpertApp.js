import React, { useState } from 'react'
import { AddCategory } from './categories/AddCategory';
import { GifGrid } from './categories/GifGrid';

// componente principal 

export const GifExpertApp = () => {

    // hook
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     const newCateg = 'x-men';
    //     // setCategories([...categories, newCateg]); // forma 1

    //     // forma 2
    //     setCategories(cat => [...cat, newCateg]); // forma 2
    // }

    return (
        <>
            <h2>GifExpertApp</h2>

            {/* invocar el componente AddCategory y enviar atributos por el prop */}
            <AddCategory setCategories={setCategories} />

            <hr></hr>
            {/* <button onClick={handleAdd} >Agregar</button> */}

            {/* lista de categorias */}
            <ol>
                {
                    // categories.map(category => {
                    //     return <li key={category}>{category}</li>
                    // })

                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))

                }
            </ol>
        </>
    )
}
