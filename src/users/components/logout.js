import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

import {logOutUserAction} from '../actions';

function LogoutUser() {

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logOutUserAction());
    history.replace('/');
  });

  return <></>;
}

export default LogoutUser;
