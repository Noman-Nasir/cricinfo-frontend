export const isUserLoggedInSelector = state => state.auth.isLoggedIn;
export const userSelector = state => state.auth.user;
export const fetchingUserSelector = state => state.auth.fetchingUser;
export const fetchingUserFailedSelector = state => state.auth.fetchingUserFailed;
export const errorsSelector = state => state.auth.errors;
