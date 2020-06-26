import React from 'react';
import Slider from 'react-slick';
import Card from '../Card';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
};

const CardSlider = ({ profiles, className }) => {
  return (
    !!profiles?.length && (
      <Slider {...sliderSettings}>
        {profiles.map((profile) => (
          <Card key={`profile-${profile.id}`} profile={profile} className={className} />
        ))}
      </Slider>
    )
  );
};

export default CardSlider;
