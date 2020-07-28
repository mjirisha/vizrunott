import React from 'react';
import Radio from '../Radio';
import './radioGroup.scss';

const RadioGroup = ({ name, options, onChange }) => {
  return (
    !!options?.length && (
      <div className='radio__group'>
        {options.map((option) => (
          <Radio key={`radio-${option.htmlFor}`} name={name} option={option} onChange={onChange}/>
        ))}
      </div>
    )
  );
};

export default RadioGroup;
