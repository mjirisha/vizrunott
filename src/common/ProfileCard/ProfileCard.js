import React from 'react';
import './profileCard.scss';

// this component is for inner pages
// such as profile details / edit / etc

const ProfileCard = () => {
  return (
    <div className='profile-card'>
      <div className='profile-card__img'>
        <img
          src='https://www.chitalnya.ru/upload3/715/55208e26f3783b75d0191c01a27cee9c.jpg'
          alt=''
        />
        <div className='profile-card__category'></div>
      </div>
      <div className='profile-card__bottom'></div>
    </div>
  );
};

export default ProfileCard;
