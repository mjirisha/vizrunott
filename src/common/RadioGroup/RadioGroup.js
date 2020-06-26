import React from 'react';
import Radio from '../Radio';
import './radioGroup.scss';

const RadioGroup = ({ name, radioOptions }) => {
  return (
    !!radioOptions.length && (
      <div className='radio__group'>
        {radioOptions.map((option) => (
          <Radio key={`radio-${option.htmlFor}`} name={name} option={option} />
        ))}
      </div>
    )
  );
};

export default RadioGroup;
