import React from 'react';
import ErrorMessage from '../ErrorMessage';

const Input = ({
  id,
  name,
  type = 'text',
  ref,
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
        ref={ref}
      />
    ) : (
      <input
        id={id}
        className={`input${className ? ` ${className}` : ''}`}
        name={name}
        type={type}
        ref={ref}
      />
    )}
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </>
);

export default Input;
