import React from 'react';
import PhoneInput from 'react-phone-number-input';
import ErrorMessage from '../ErrorMessage';

const TelInput = ({
  value = '',
  setPhoneValue,
  id,
  name,
  ref,
  className,
  error,
}) => {
  return (
    <>
      <PhoneInput
        id={id}
        name={name}
        placeholder='შეიყვანეთ ნომერი'
        value={''}
        onChange={() => console.log(123123)}
        addInternationalOption={false}
        countries={['GE']}
        className={`input-phone${className ? ` ${className}` : ''}`}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};

export default TelInput;
