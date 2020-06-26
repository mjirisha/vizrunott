import React from 'react';
import Card from '../Card';
import './profilesGrid.scss';

const ProfilesGrid = ({ profiles }) => {
  return (
    !!profiles?.length && (
      <div className='grid grid-profiles'>
        {profiles.map((profile) => (
          <Card key={`profile-${profile.id}`} profile={profile} />
        ))}
      </div>
    )
  );
};

export default ProfilesGrid;
