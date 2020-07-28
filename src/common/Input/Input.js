import React from 'react';
import ErrorMessage from '../ErrorMessage';

const Input = ({
  id,
  name,
  type = 'text',
  register,
  className,
  error,
  isTextArea,
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
      />
    )}
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </>
);

export default Input;
