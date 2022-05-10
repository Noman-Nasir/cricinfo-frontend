export function extractErrorsString(errors) {
  switch (errors.constructor) {
    case String:
      return errors;
    case Object:
      let objChildError = Object.keys(errors).map((key) => [key + ': '] + errors[key]);
      return objChildError.map(extractErrorsString);
    case Array:
      return errors.map(extractErrorsString);

    default:
      return '';
  }
}

export function createPlayerFromJSONResponse(jsonPlayer) {
  return {
    id: jsonPlayer.id,
    firstName: jsonPlayer.first_name,
    lastName: jsonPlayer.last_name,
    avatar: jsonPlayer.avatar,
    dateOfBirth: jsonPlayer.date_of_birth,
    bio: jsonPlayer.bio,
    address: jsonPlayer.address,
    role: jsonPlayer.role,
    battingStyle: jsonPlayer.batting_style,
    bowlingStyle: jsonPlayer.bowling_style,
    iccRanking: jsonPlayer.icc_ranking,
  };
}

export function getRequestOptions(method = 'GET', includeToken = false, content_type = 'json') {

  let headers = new Headers();

  if (content_type === 'json')
    headers.append('Content-Type', 'application/json');

  if (includeToken) {
    let token = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).token;
    headers.append(
      'Authorization', `Token ${token}`,
    );
  }
  return {
    method,
    headers,
  };
}
