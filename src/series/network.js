import {extractErrorsString, getRequestOptions} from '../common/helper';
import {fetchAllMatches} from '../matches/network';

let seriesUrl = `${process.env.REACT_APP_BACKEND_URL}/series/`;

export async function fetchAllSeries() {

  let requestOptions = getRequestOptions('GET');
  let response = await fetch(seriesUrl, requestOptions);
  let jsonBody = await response.json();

  if (response.ok) {
    let matches = await fetchAllMatches();
    return jsonBody.map(seriesDetail => {
      return {
        id: seriesDetail.id,
        startDate: seriesDetail.start_date,
        endDate: seriesDetail.end_date,
        matches: matches.filter((match) => seriesDetail.matches.includes(match.id)),
      };
    });
  } else {
    let extractedErrors = extractErrorsString(jsonBody).flat();
    throw (extractedErrors);
  }
}

export async function fetchSeriesById(id) {

  let requestOptions = getRequestOptions('GET');
  let response = await fetch(seriesUrl + id, requestOptions);
  let jsonBody = await response.json();

  if (response.ok) {
    let matches = await fetchAllMatches();
    return {
      id: jsonBody.id,
      startDate: jsonBody.start_date,
      endDate: jsonBody.end_date,
      matches: matches.filter((match) => jsonBody.matches.includes(match.id)),
    };
  } else {
    let extractedErrors = extractErrorsString(jsonBody).flat();
    throw (extractedErrors);
  }
}

export async function postNewSeries(rawSeries) {

  let requestOptions = getRequestOptions('POST', true);

  requestOptions = {
    ...requestOptions,
    body: JSON.stringify({start_date: rawSeries.startDate, end_date: rawSeries.endDate, matches: []}),
  };
  let response = await fetch(seriesUrl, requestOptions);
  let jsonBody = await response.json();

  if (response.ok) {
    return {
      id: jsonBody.id,
      startDate: jsonBody.start_date,
      endDate: jsonBody.end_date,
    };
  } else {
    let extractedErrors = extractErrorsString(jsonBody).flat();
    throw (extractedErrors);
  }
}
