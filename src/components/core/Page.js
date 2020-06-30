import React from 'react';
import Header from './Header';

const Page = ({ children, innerLayout }) => {
  return (
    <>
      <Header />
      {innerLayout ? <div className='page'>{children}</div> : children}
    </>
  );
};

export default Page;
