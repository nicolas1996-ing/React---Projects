import React, { useState } from 'react'
import PropTypes from 'prop-types';



export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('Hola mundo'); // hook 

    // función que se invoca cuando el valor del input se actuliza
    // cuando se escribe sobre el input 
    const handleInputChange = (e) => {
        // atulizar el valor de inputValue por medio del setInputValue 
        console.log(e.target.value); // lo que se recibe 
        setInputValue(e.target.value);
    }

    // función para el submit del formulario 
    const handleSubmit = (e) => {
        e.preventDefault(); // config

        if (inputValue.trim().length > 2) {
            setCategories(categories => [inputValue, ...categories]); // actulizar lista de categ
            setInputValue(''); // actulizar el valor del input 
        }
        console.log('submit done !');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                >

                </input>

            </form>
        </>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}