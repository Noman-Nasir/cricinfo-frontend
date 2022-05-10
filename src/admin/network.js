import {extractErrorsString, getRequestOptions} from 'src/common/helper';

export async function postNewGround(rawGround) {
  let groundsUrl = `${process.env.REACT_APP_BACKEND_URL}/grounds/`;

  let requestOptions = getRequestOptions('POST', true);

  requestOptions = {
    ...requestOptions,
    body: JSON.stringify({
      name: rawGround.name,
      address: rawGround.address,
      head_curator: rawGround.headCurator,
    }),
  };
  let response = await fetch(groundsUrl, requestOptions);
  let jsonBody = await response.json();

  if (response.ok) {
    return {
      id: jsonBody.id,
      name: jsonBody.name,
      address: jsonBody.address,
      headCurator: jsonBody.head_curator,
    };
  } else {
    let extractedErrors = extractErrorsString(jsonBody).flat();
    throw (extractedErrors);
  }
}
