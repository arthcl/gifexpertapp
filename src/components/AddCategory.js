import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {



    const [inputValue, setInputValue] = useState('');  // '' comillas simple ayuda a controlar el input vacio
    const handleInputChange = (e) => {

        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log("submit hecho");
        if(inputValue.trim().length > 2)
        {
            setCategories(callback => [inputValue, ...callback]);
            setInputValue('');
        }
        
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange= { handleInputChange }
            />
        </form>
        
        
    )
}


AddCategory.propTypes = {
    setCategories:  PropTypes.func.isRequired
}