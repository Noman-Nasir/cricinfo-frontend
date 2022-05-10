import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ErrorAlert from '../../../../common/components/errorAlert';
import LoadingPage from '../../../../common/components/loadingPage';
import {clearErrors} from '../../../actionFunctions';
import {verifyUserEmailAction} from '../../../actions';
import {errorsSelector, fetchingUserFailedSelector, fetchingUserSelector, userSelector} from '../../../selector';
import VerifyEmailForm from './verifyEmailForm';

function VerifyEmail() {

  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  const verifyingUser = useSelector(fetchingUserSelector);
  const verifyingUserFailed = useSelector(fetchingUserFailedSelector);
  const verifyingErrors = useSelector(errorsSelector);

  function verifyCode(rawVerificationCode) {
    dispatch(verifyUserEmailAction(JSON.stringify(rawVerificationCode)));
  }

  useEffect(() => {
    return () => {
      dispatch(clearErrors());
    };
  }, [dispatch]);

  if (user && user.isVerified)
    return <p className="h1">User is Verified.</p>;

  else
    return <>
      {verifyingUser ? <LoadingPage/> : (verifyingUserFailed ?
        <ErrorAlert error={verifyingErrors} header="Verification Failed"/> : <></>)}
      <VerifyEmailForm onFormSubmit={verifyCode}/>
    </>;
}

export default VerifyEmail;
