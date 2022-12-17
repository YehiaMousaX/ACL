import React from 'react';
import './profileInstructor.css';

const ProfilePage = ({ name, email, bio, rating }) => (
    
  <div className="profile-page">
    <h1 className="name">{name}Name : yehiaSamir</h1>
    <p className="email">{email}Email : gamed neek@a7a</p>
    <p className="bio">{bio}Bio : manga</p>
    <p className="Rating">{rating}rating : 5</p>
    
    <button className="edit-button" onClick={() => {
  // trigger some action here, such as opening a modal for editing the bio
    }}>
                Edit Bio
    </button>
 </div>
);

export default ProfilePage;
