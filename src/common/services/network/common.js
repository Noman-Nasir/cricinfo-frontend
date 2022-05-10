import {extractErrorsString, getRequestOptions} from 'src/common/helper';

let groundsUrl = `${process.env.REACT_APP_BACKEND_URL}/grounds/`;

export async function fetchAllGrounds() {

  let requestOptions = getRequestOptions('GET');
  let response = await fetch(groundsUrl, requestOptions);
  let jsonBody = await response.json();

  if (response.ok) {
    let grounds = jsonBody.map(ground => {
      return {
        id: ground.id,
        name: ground.name,
        address: ground.address,
        headCurator: ground.head_curator,
      };
    });

    localStorage.setItem('grounds', JSON.stringify(grounds));
    return grounds;
  } else {
    let extractedErrors = extractErrorsString(jsonBody).flat();
    throw (extractedErrors);
  }
}

export async function fetchGroundById(id) {

  let requestOptions = getRequestOptions('GET');
  let response = await fetch(groundsUrl + id, requestOptions);
  let jsonBody = await response.json();

  if (response.ok) {
    return {
      id: jsonBody.id,
      name: jsonBody.name,
      address: jsonBody.name,
      headCurator: jsonBody.head_curator,
    };
  } else {
    let extractedErrors = extractErrorsString(jsonBody).flat();
    throw (extractedErrors);
  }
}
