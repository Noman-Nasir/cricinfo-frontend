import {authActionTypes} from './actionFunctions';

const initialAuthState = {
  isLoggedIn: Boolean(localStorage.getItem('user')),
  user: JSON.parse(localStorage.getItem('user')),
  fetchingUser: false,
  fetchingUserFailed: false,
  errors: null,
};

export default function authReducer(state = initialAuthState, action) {
  switch (action.type) {
    case authActionTypes.modifyUser:
      return {
        ...state,
        user: action.payload.user,
        fetchingUser: false,
      };

    case authActionTypes.fetchingUser:
      return {
        ...state,
        fetchingUser: true,
        fetchingUserFailed: false,
        errors: null,
      };

    case authActionTypes.fetchingUserFailed:
      return {
        ...state,
        fetchingUser: false,
        fetchingUserFailed: true,
        errors: action.payload.errors,
      };

    case authActionTypes.login:
      return {
        isLoggedIn: true,
        user: action.payload.user,
        fetchingUser: false,
        fetchingUserFailed: false,
        errors: null,
      };

    case authActionTypes.logout:
      return {
        isLoggedIn: false,
        user: null,
        fetchingUser: false,
        fetchingUserFailed: false,
        errors: null,
      };
    case authActionTypes.clearErrors:
      return {
        ...state,
        fetchingUser: false,
        fetchingUserFailed: false,
        errors: null,
      };

    default:
      return state;
  }
}
