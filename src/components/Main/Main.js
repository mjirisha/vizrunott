import React from 'react';
import MainSlider from './MainSlider';
import MainFilter from './MainFilter';
import CardSlider from '../../common/CardSlider';
import ProfilesGrid from '../../common/ProfilesGrid';
import StickyFilter from '../../common/StickyFilter';
import profiles from '../../mockups/profiles.json';

const Main = () => {
  return (
    <>
      <section className='section__main'>
        <MainFilter />
        <MainSlider />
      </section>
      <StickyFilter />
      <section className='section section--white'>
        <div className='container container-fixed'>
          <h2 className='section__header'>
            <span className='section__header-icon section__header-icon-vip'></span>
            VIP განცხადებები
          </h2>
          <CardSlider className='vip' profiles={profiles} />
        </div>
      </section>
      <section className='section'>
        <div className='container container-fixed'>
          <h2 className='section__header'>
            <span className='section__header-icon'></span>ახალი დამატებული
          </h2>
          <ProfilesGrid profiles={profiles} />
        </div>
      </section>
    </>
  );
};

export default Main;
