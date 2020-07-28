import React from 'react';
import { filterNumeric } from '../../utils/helpers';
import ErrorMessage from '../ErrorMessage';

const Input = ({
  id,
  name,
  type = 'text',
  register,
  className,
  error,
  isTextArea,
  isNumber,
}) => (
  <>
    {isTextArea ? (
      <textarea
        id={id}
        className={`input textarea${className ? ` ${className}` : ''}`}
        name={name}
        ref={register}
      />
    ) : (
      <input
        id={id}
        className={`input${className ? ` ${className}` : ''}`}
        name={name}
        type={type}
        ref={register}
        onKeyPress={isNumber && filterNumeric}
      />
    )}
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </>
);

export default Input;
