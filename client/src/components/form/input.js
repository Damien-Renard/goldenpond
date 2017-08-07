import React from 'react';

const Input = ({ placeholder, handleOnChange }) => (
  <input className="create-pond-input" placeholder={placeholder} onChange={handleOnChange} />
);

export default Input;
