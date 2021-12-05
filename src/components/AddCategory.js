import React, { useState } from 'react'
import { PropTypes } from 'prop-types';

export const AddCategory = ({setCategories}) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim()) {
      setCategories(cats => [inputValue, ...cats]);
      setInputValue('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="What are you looking for?"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}
