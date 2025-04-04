import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
  const { user } = useContext(UserContext);

  if (!user)
    return <div className="m-3">Please log in to see your profile.</div>;
  return <div className="m-3">Welcome {user.username}</div>;
}

export default Profile;
