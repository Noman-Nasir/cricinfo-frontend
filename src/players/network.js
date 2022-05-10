import {createPlayerFromJSONResponse, extractErrorsString, getRequestOptions} from '../common/helper';

let playersUrl = `${process.env.REACT_APP_BACKEND_URL}/players/`;
console.log(playersUrl);

export async function fetchAllPlayers() {

  let requestOptions = getRequestOptions('GET');
  let response = await fetch(playersUrl, requestOptions);
  let jsonBody = await response.json();

  if (response.ok) {
    let players = [];
    for (let jsonPlayer of jsonBody) {
      let player = createPlayerFromJSONResponse(jsonPlayer);
      players.push(player);
    }
    return players;
  } else {
    let extractedErrors = extractErrorsString(jsonBody).flat();
    throw (extractedErrors);
  }
}

export async function fetchPlayerById(id) {

  let requestOptions = getRequestOptions('GET');
  let response = await fetch(playersUrl + id, requestOptions);
  let jsonBody = await response.json();

  if (response.ok)
    return createPlayerFromJSONResponse(jsonBody);
  else {
    let extractedErrors = extractErrorsString(jsonBody).flat();
    throw (extractedErrors);
  }
}

export async function postNewPlayer(rawPlayer) {

  let player = {
    first_name: rawPlayer.firstName,
    last_name: rawPlayer.lastName,
    avatar: rawPlayer.avatar,
    date_of_birth: rawPlayer.dateOfBirth,
    bio: rawPlayer.bio,
    address: rawPlayer.address,
    role: rawPlayer.playerRole,
    batting_style: rawPlayer.battingStyle,
    bowling_style: rawPlayer.bowlingStyle,
    icc_ranking: rawPlayer.iccRanking,
  };

  let formData = new FormData();
  for (let key of Object.keys(player))
    formData.append(key, player[key]);

  let requestOptions = getRequestOptions('POST', true, 'multipart');

  requestOptions = {
    ...requestOptions,
    body: formData,
  };

  let response = await fetch(playersUrl, requestOptions);
  let jsonBody = await response.json();

  if (response.ok)
    return createPlayerFromJSONResponse(jsonBody);
  else {
    let extractedErrors = extractErrorsString(jsonBody).flat();
    throw (extractedErrors);
  }
}
