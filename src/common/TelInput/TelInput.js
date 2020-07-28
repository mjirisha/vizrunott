import React from 'react';
import PhoneInput from 'react-phone-number-input';
import ErrorMessage from '../ErrorMessage';

const TelInput = ({ onChange, className, error }) => {
  return (
    <>
      <PhoneInput
        placeholder='შეიყვანეთ ნომერი'
        onChange={(e) => onChange(e)}
        addInternationalOption={false}
        countries={['GE']}
        className={`input-phone${className ? ` ${className}` : ''}`}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};

export default TelInput;
