import {extractErrorsString, getRequestOptions} from '../common/helper';
import {fetchAllPlayers} from '../players/network';

let teamsUrl = `${process.env.REACT_APP_BACKEND_URL}/teams/`;

export async function fetchAllTeams() {

  let requestOptions = getRequestOptions('GET');
  let response = await fetch(teamsUrl, requestOptions);
  let jsonBody = await response.json();

  if (response.ok) {

    let players = await fetchAllPlayers();
    return jsonBody.map(team => {
      return {
        id: team.id,
        name: team.name,
        players: players.filter((player) => team.players.includes(player.id)),
      };
    });
  } else {
    let extractedErrors = extractErrorsString(jsonBody).flat();
    throw (extractedErrors);
  }
}

export async function fetchTeamById(id) {
  let requestOptions = getRequestOptions('GET');
  let response = await fetch(teamsUrl + id, requestOptions);
  let jsonBody = await response.json();

  if (response.ok) {
    let players = await fetchAllPlayers();
    return {
      id: jsonBody.id,
      name: jsonBody.name,
      players: players.filter((player) => jsonBody.players.includes(player.id)),
    };
  } else {
    let extractedErrors = extractErrorsString(jsonBody).flat();
    throw (extractedErrors);
  }
}

export async function postNewTeam(rawTeam) {

  let requestOptions = getRequestOptions('POST', true);

  requestOptions = {
    ...requestOptions,
    body: JSON.stringify(rawTeam),
  };
  let response = await fetch(teamsUrl, requestOptions);
  let jsonBody = await response.json();

  if (response.ok) {
    let players = await fetchAllPlayers();
    return {
      id: jsonBody.id,
      name: jsonBody.name,
      players: players.filter((player) => jsonBody.players.includes(player.id)),
    };
  } else {
    let extractedErrors = extractErrorsString(jsonBody).flat();
    throw (extractedErrors);
  }
}
