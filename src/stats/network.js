import {createPlayerFromJSONResponse, extractErrorsString, getRequestOptions} from '../common/helper';

let statsUrl = `${process.env.REACT_APP_BACKEND_URL}/stats`;

function createGroundStatsFromJSONResponse(jsonGroundStats) {
  return {
    ground: {
      id: jsonGroundStats.ground.id,
      address: jsonGroundStats.ground.address,
      headCurator: jsonGroundStats.ground.head_curator,
      name: jsonGroundStats.ground.name,
    },
    matchCount: jsonGroundStats.match_count,
  };
}

export async function getMostVisitedGround() {
  let requestOptions = getRequestOptions('GET', true);
  let response = await fetch(statsUrl + '/ground-stats', requestOptions);
  let jsonBody = await response.json();

  if (response.ok) {
    return createGroundStatsFromJSONResponse(jsonBody);
  } else {
    throw (extractErrorsString(jsonBody).flat());
  }
}

function createPlayerStatsFromJSONResponse(jsonPlayerStats) {
  return {
    player: createPlayerFromJSONResponse(jsonPlayerStats.player),
    visitCount: jsonPlayerStats.visit_count,
  };
}

export async function getMostVisitedPlayer(player_role = 'any') {
  let requestOptions = getRequestOptions('GET', true);
  let response;
  if (player_role === 'any')
    response = await fetch(statsUrl + '/player-visits', requestOptions);
  else
    response = await fetch(statsUrl + '/player-type-stats?player_role=' + player_role, requestOptions);

  let jsonBody = await response.json();
  if (response.ok) {
    return createPlayerStatsFromJSONResponse(jsonBody);
  } else {
    let extractedErrors = extractErrorsString(jsonBody).flat();
    throw (extractedErrors);
  }
}
