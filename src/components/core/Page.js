import React from 'react';
import Header from './Header';
import './page.scss';

const Page = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Page;
