import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

  const [inputVal, setInputVal] = useState('');

  const handleChange = (event) => setInputVal(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    if( inputVal.trim().length > 2 ) {
      setCategories( prevState => [ inputVal, ...prevState ] );
      setInputVal('');
    }
  }

  return (
    <form onSubmit={ handleSubmit } style={{marginTop: '50px'}}>
      <input 
        type="text"
        value={ inputVal }
        placeholder="Search something"
        onChange={ handleChange }
      />
      {/* <button type="submit">Add</button> */}
    </form>
  );
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
}

