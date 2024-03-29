import React, { useState } from 'react';
import PropTypes from 'prop-types'

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = e =>{
        setinputValue(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories(cat=> [inputValue,...cat]); //Recordar el callback que posee setCategories, este contiene el estado de las categorias del componente superior
            setinputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <h2>Add Category</h2>
            <input
                type='text'
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    );

    
}

AddCategory.propTypes = {
    setCategories:PropTypes.func.isRequired
}