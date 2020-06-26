import React from 'react';
import './radio.scss';

const Radio = ({ name, option }) => {
  return (
    <label htmlFor={option.htmlFor} className='radio'>
      <input
        type='radio'
        id={option.htmlFor}
        name={name}
        value={option.value}
      />
      <span className='radio__mark'></span>
      <div>{option.label}</div>
    </label>
  );
};

export default Radio;
