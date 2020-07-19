import React from 'react';
import Header from './Header';

// innerLayout - for inner pages with blue bg
// basicLayout - for auth and other routes with white bg

const Page = ({ children, innerLayout, basicLayout }) => {
  const getInner = () => {
    if (innerLayout) return <div className='page'>{children}</div>;
    if (basicLayout) return <div className='page page--white'>{children}</div>;
    else return children;
  };

  return (
    <>
      <Header />
      {getInner()}
    </>
  );
};

export default Page;
