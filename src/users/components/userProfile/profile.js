import React from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {userSelector} from '../../selector';
import UserCard from './userCard';

function UserProfile() {

  const user = useSelector(userSelector);

  const history = useHistory();

  function verifyUserHandler() {
    history.push('/users/verify');
  }

  return (
    <div className="container">
      <UserCard user={user} onVerifyUser={verifyUserHandler}/>
    </div>
  );

}

export default UserProfile;
