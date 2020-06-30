import React from 'react';
import './profileCard.scss';

// this component is for inner pages
// such as profile details / edit / etc

const ProfileCard = () => {
  return (
    <div className='profile-card'>
      <div className='profile-card__row'>
        <div className='profile-card__top'>VIP</div>
        <div className='profile-card__rating'>^^^^^</div>
      </div>
      <div className='profile-card__img'>
        <img
          src='https://www.chitalnya.ru/upload3/715/55208e26f3783b75d0191c01a27cee9c.jpg'
          alt=''
        />
        <div className='profile-card__category'>ძიძა</div>
      </div>

      <div className='profile-card__bottom'>
        <div className='profile-card__row profile-card__id'>
          პროფილის ID: 666
        </div>
        <div className='profile-card__row'>
          <div className='profile-card__name'>გიორგი დედალამაზიშვილი</div>
        </div>

        <div className='profile-card__contacts'>
          <h3 className='subheader subheader--min'>საკონტაქტო ინფორმაცია:</h3>
          <div className='profile-card__row'>
            <a
              href='tel:+995555555555'
              className='btn btn-blue btn-square profile-card__tel'
            >
              +995555555555
            </a>
            <a
              href='#'
              className='btn btn-facebook btn-square profile-card__facebook'
            >
              f
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
