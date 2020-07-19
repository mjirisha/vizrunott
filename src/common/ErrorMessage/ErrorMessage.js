import React from 'react';

const ErrorMessage = ({ children }) => {
  return children && <div className='error-msg'>{children}</div>;
};

export default ErrorMessage;
