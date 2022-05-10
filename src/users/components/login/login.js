import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import ErrorAlert from '../../../common/components/errorAlert';
import LoadingPage from '../../../common/components/loadingPage';
import {clearErrors} from '../../actionFunctions';
import {loginUserAction} from '../../actions';
import {errorsSelector, fetchingUserFailedSelector, fetchingUserSelector} from '../../selector';

import LoginForm from './loginForm';

function LoginUser() {

  const dispatch = useDispatch();
  const fetchingUser = useSelector(fetchingUserSelector);
  const fetchingUserFailed = useSelector(fetchingUserFailedSelector);
  const fetchingErrors = useSelector(errorsSelector);

  useEffect(() => {
    return () => {
      dispatch(clearErrors());
    };
  }, [dispatch]);

  async function submitHandler(rawUserCredentials) {
    dispatch(loginUserAction(JSON.stringify(rawUserCredentials)));
  }

  return <>
    {fetchingUser ? <LoadingPage/> : (fetchingUserFailed ?
      <ErrorAlert error={fetchingErrors} header="Login Failed"/> : <></>)}
    <LoginForm onFormSubmit={submitHandler}/>
  </>;

}

export default LoginUser;
