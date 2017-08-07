import React from 'react';

const SelectDropdown = ({ id, values, handleSelect }) => (
  <select id={id} onChange={handleSelect}>
    {
      values.map(val => (
        <option key={val.value} value={val.value}>{val.label}</option>
      ))
    }
  </select>
);

export default SelectDropdown;
