export const authActionTypes = {
  login: 'LOGIN',
  logout: 'LOGOUT',
  fetchingUser: 'FETCHING_USER',
  fetchingUserFailed: 'FETCHING_USER_FAILED',
  clearErrors: 'CLEAR_ERRORS',
  modifyUser: 'MODIFY_USER',
};

export const login = user => {
  return {
    type: authActionTypes.login,
    payload: {user},
  };
};

export const updateUser = user => {
  return {
    type: authActionTypes.modifyUser,
    payload: {user},
  };
};

export const logout = () => {
  return {
    type: authActionTypes.logout,
  };
};

export const fetchingUserFailed = errors => {
  return {
    type: authActionTypes.fetchingUserFailed,
    payload: {errors},
  };
};

export const clearErrors = () => {
  return {
    type: authActionTypes.clearErrors,
  };
};

export const fetchingUser = () => {
  return {
    type: authActionTypes.fetchingUser,
  };
};
