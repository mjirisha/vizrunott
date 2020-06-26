import React from 'react';
import ProfilesGrid from '../../common/ProfilesGrid';
import Filter from './Filter';
import profiles from '../../mockups/profiles.json';

const Profiles = () => {
  return (
    <div className='container container-fixed'>
      <Filter />
      <ProfilesGrid profiles={profiles} />
    </div>
  );
};

export default Profiles;
