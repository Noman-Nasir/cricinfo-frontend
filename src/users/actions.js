import {fetchingUser, fetchingUserFailed, login, logout, updateUser} from './actionFunctions';
import {loginUser, registerUser, verifyUserEmail} from './network';

export const loginUserAction = (rawUserCredentials) => {

  return async (dispatch) => {
    dispatch(fetchingUser());
    try {
      let user = await loginUser(rawUserCredentials);
      dispatch(login(user));
    } catch (errors) {
      dispatch(fetchingUserFailed(errors));
    }
  };
};

export const registerUserAction = (rawUserData) => {

  return async (dispatch) => {
    dispatch(fetchingUser());
    try {
      let user = await registerUser(rawUserData);
      dispatch(login(user));
    } catch (errors) {
      dispatch(fetchingUserFailed(errors));
    }
  };
};

export const verifyUserEmailAction = (rawUserData) => {

  return async (dispatch) => {
    dispatch(fetchingUser());
    try {
      let user = await verifyUserEmail(rawUserData);
      dispatch(updateUser(user));
    } catch (errors) {
      dispatch(fetchingUserFailed(errors));
    }
  };
};

export const logOutUserAction = () => {

  return async (dispatch) => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch(logout());
  };
};
