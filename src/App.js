import React from 'react';
import { RecoilRoot } from 'recoil';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-phone-number-input/style.css';
import "react-datepicker/dist/react-datepicker.css";
import AppInner from './components/core/AppInner';
import './assets/styles/main.scss';

const App = () => (
  <RecoilRoot>
    <AppInner />
  </RecoilRoot>
);

export default App;
