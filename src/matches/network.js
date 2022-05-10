import {extractErrorsString, getRequestOptions} from '../common/helper';
import {fetchAllGrounds, fetchGroundById} from '../common/services/network/common';
import {fetchAllTeams} from '../teams/network';

let matchesUrl = `${process.env.REACT_APP_BACKEND_URL}/matches/`;

export async function fetchAllMatches() {

  let requestOptions = getRequestOptions('GET');
  let response = await fetch(matchesUrl, requestOptions);
  let jsonBody = await response.json();

  if (response.ok) {
    let teams = await fetchAllTeams();
    let grounds = await fetchAllGrounds();
    return jsonBody.map(jsonMatch => {
      return {
        'id': jsonMatch.id,
        'matchDate': jsonMatch.match_date,
        'result': jsonMatch.result,
        'teamA': teams.find(team => team.id === jsonMatch.team_a),
        'teamB': teams.find(team => team.id === jsonMatch.team_b),
        'venue': grounds.find(ground => ground.id === jsonMatch.venue),
        'series': jsonMatch.series,
      };
    });
  } else {
    let extractedErrors = extractErrorsString(jsonBody).flat();
    throw (extractedErrors);
  }
}

export async function fetchMatchById(id) {

  let requestOptions = getRequestOptions('GET');
  let response = await fetch(matchesUrl + id, requestOptions);
  let jsonBody = await response.json();

  if (response.ok) {
    let teams = await fetchAllTeams();
    return {
      'id': jsonBody.id,
      'matchDate': jsonBody.match_date,
      'result': jsonBody.result,
      'teamA': teams.find(team => team.id === jsonBody.team_a),
      'teamB': teams.find(team => team.id === jsonBody.team_b),
      'venue': await fetchGroundById(jsonBody.venue),
      'series': jsonBody.series,
    };
  } else {
    let extractedErrors = extractErrorsString(jsonBody).flat();
    throw (extractedErrors);
  }
}

export async function postNewMatch(rawMatch) {

  let match = {
    team_a: rawMatch.teamA,
    team_b: rawMatch.teamB,
    match_date: rawMatch.matchDate,
    series: rawMatch.series,
    venue: rawMatch.ground,
    result: rawMatch.result,
  };

  let requestOptions = getRequestOptions('POST', true);

  requestOptions = {
    ...requestOptions,
    body: JSON.stringify(match),
  };

  let response = await fetch(matchesUrl, requestOptions);
  let jsonBody = await response.json();

  if (response.ok) {
    let teams = await fetchAllTeams();
    return {
      'id': jsonBody.id,
      'matchDate': jsonBody.match_date,
      'result': jsonBody.result,
      'teamA': teams.find(team => team.id === jsonBody.team_a),
      'teamB': teams.find(team => team.id === jsonBody.team_b),
      'venue': await fetchGroundById(jsonBody.venue),
      'series': jsonBody.series,
    };
  } else {
    let extractedErrors = extractErrorsString(jsonBody).flat();
    throw (extractedErrors);
  }
}
