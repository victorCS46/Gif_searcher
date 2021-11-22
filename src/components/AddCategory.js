import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

  const [inputVal, setInputVal] = useState('');

  const handleChange = (event) => setInputVal(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    if( inputVal.trim().length > 2 ) {
      setCategories( prevState => [...prevState, inputVal] );
      setInputVal('');
    }
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input 
        type="text"
        value={ inputVal }
        placeholder="Write a category"
        onChange={ handleChange }
      />
      <button type="submit">Add</button>
    </form>
  );
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
}

