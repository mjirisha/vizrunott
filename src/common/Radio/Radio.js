import React from 'react';
import './radio.scss';

const Radio = ({ name, option, onChange }) => {
  return (
    <label htmlFor={option.htmlFor} className='radio'>
      <input
        type='radio'
        id={option.htmlFor}
        name={name}
        value={option.value}
        onChange={(e) => onChange(e.target.value)}
      />
      <span className='radio__mark'></span>
      <div>{option.label}</div>
    </label>
  );
};

export default Radio;
