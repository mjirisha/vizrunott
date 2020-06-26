import React from 'react';
import { FormattedMessage } from 'react-intl';
import './card.scss';

const Card = ({ className, profile }) => {
  if (!profile) return null;
  return (
    <div className={`card ${className ? className : ''}`}>
      <div className='card__inner'>
        <div className='card__inner-img'>
          <img src={profile.img} alt={profile.name} />
          {profile.category && (
            <div className='card__inner-category'>{profile.category}</div>
          )}
        </div>
        <div className='card__bottom'>
          <div className='card__styled-element'></div>
          <div className='card__inner-info'>
            <h3 className='card__inner-row card__inner-name'>
              <span className='card__inner-label'>
                <FormattedMessage id='firstname' /> :
              </span>{' '}
              {profile.firstname || <FormattedMessage id='placeholder.unknown' />}
            </h3>
            <h3 className='card__inner-row card__inner-name'>
              <span className='card__inner-label'>
                <FormattedMessage id='lastname' /> :
              </span>{' '}
              {profile.lastname || <FormattedMessage id='placeholder.unknown' />}
            </h3>
            <p className='card__inner-row'>
              <span className='card__inner-label'>
                <FormattedMessage id='age' /> :
              </span>{' '}
              {profile.age ? (
                <>
                  {profile.age} <FormattedMessage id='years' />
                </>
              ) : (
                <FormattedMessage id='placeholder.unknown' />
              )}
            </p>
            <p className='card__inner-row'>
              <span className='card__inner-label'>
                <FormattedMessage id='city' /> :
              </span>{' '}
              {profile.city || <FormattedMessage id='placeholder.unknown' />}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
