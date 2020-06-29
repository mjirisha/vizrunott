import React from 'react';
import ProfileCard from '../../../common/ProfileCard';
import './profileDetails.scss';

const ProfileDetails = () => {
  return (
    <div className="profile-page">
      <ProfileCard />
      <div className="profile-page--inner"></div>
    </div>
  );
};

export default ProfileDetails;
