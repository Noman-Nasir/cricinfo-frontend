import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import ErrorAlert from '../../../common/components/errorAlert';
import LoadingPage from '../../../common/components/loadingPage';
import {clearErrors} from '../../actionFunctions';
import {registerUserAction} from '../../actions';
import {errorsSelector, fetchingUserFailedSelector, fetchingUserSelector} from '../../selector';

import RegistrationForm from './registrationForm';

function RegisterUser() {

  const dispatch = useDispatch();
  const registeringUser = useSelector(fetchingUserSelector);
  const registeringUserFailed = useSelector(fetchingUserFailedSelector);
  const registrationErrors = useSelector(errorsSelector);

  const [errors, setErrors] = useState(null);

  useEffect(() => {
    return () => {
      dispatch(clearErrors());
    };
  }, [dispatch]);

  async function submitHandler(rawUserData) {
    dispatch(clearErrors());
    if (rawUserData.password !== rawUserData.password2) {
      setErrors(<ErrorAlert error="Passwords Dont Match" header="Form Invalid"/>);
      return;
    }
    setErrors(null);
    let jsonUser = JSON.stringify(rawUserData);
    dispatch(registerUserAction(jsonUser));
  }

  return <>
    {registeringUser ? <LoadingPage/> : (registeringUserFailed ?
      <ErrorAlert error={registrationErrors} header="Registration Failed"/> : <></>)}
    <RegistrationForm onFormSubmit={submitHandler} errors={errors}/>
  </>;

}

export default RegisterUser;
