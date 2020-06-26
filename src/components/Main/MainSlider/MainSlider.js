import React, { Fragment } from 'react';
import Slider from 'react-slick';
import './mainSlider.scss';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const slides = [
  {
    title: 'Test text',
    text: 'Test textTest textTest textTest textTest textTest text',
    url: 'https://miro.medium.com/max/11344/1*32h8ts3A-7XNr6A4Js87ng.jpeg',
  },
  {
    title: 'Test text',
    text: 'Test textTest textTest textTest textTest textTest text',
    url:
      'https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png',
  },
];

const MainSlider = () => {
  return (
    !!slides.length && (
      <Slider {...sliderSettings} className='main_slider'>
        {slides.map((slide) => (
          <Fragment key={slide.id}>
            <div
              className='main_slider__slide'
              style={{
                backgroundImage: `url(${slide.url})`,
              }}
            ></div>
          </Fragment>
        ))}
      </Slider>
    )
  );
};

export default MainSlider;
