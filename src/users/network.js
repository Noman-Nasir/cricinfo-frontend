import {extractErrorsString, getRequestOptions} from '../common/helper';

let usersUrl = `${process.env.REACT_APP_BACKEND_URL}/users`;

export async function registerUser(raw) {

  let requestOptions = getRequestOptions('POST');
  requestOptions = {
    ...requestOptions,
    body: raw,
  };

  let response = await fetch(usersUrl + '/register/', requestOptions);
  let jsonBody = await response.json();

  if (response.ok) {
    let user = createUserObjectFromJSONResponse(jsonBody.data.user);
    user = {...user, 'token': jsonBody.data.token};
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  } else {
    let extractedErrors = extractErrorsString(jsonBody).flat();
    throw (extractedErrors);
  }

}

function createUserObjectFromJSONResponse(jsonUser) {
  return {
    email: jsonUser.email,
    username: jsonUser.username,
    firstName: jsonUser.first_name,
    isSuperuser: jsonUser.is_superuser,
    isVerified: jsonUser.is_verified,
    lastName: jsonUser.last_name,
  };
}

export async function loginUser(raw) {

  let requestOptions = getRequestOptions('POST');
  requestOptions = {
    ...requestOptions,
    body: raw,
  };

  let response = await fetch(usersUrl + '/login/', requestOptions);
  let jsonBody = await response.json();

  if (response.ok) {
    let user = createUserObjectFromJSONResponse(jsonBody.data.user);
    user = {...user, 'token': jsonBody.data.token};
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  } else {
    throw (extractErrorsString(jsonBody).flat());
  }
}

export async function verifyUserEmail(rawVerificationCode) {

  let requestOptions = getRequestOptions('POST', true);
  requestOptions = {
    ...requestOptions,
    body: rawVerificationCode,
  };

  let response = await fetch(usersUrl + '/verify-email/', requestOptions);
  let jsonBody = await response.json();

  if (response.ok) {
    let user = JSON.parse(localStorage.getItem('user'));
    user.isVerified = true;
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  } else {
    let extractedErrors = extractErrorsString(jsonBody).flat();
    throw (extractedErrors);
  }

}
