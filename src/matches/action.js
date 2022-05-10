export const matchActionTypes = {
  setMatches: 'SET_MATCHES',
  setError: 'SET_MATCH_ERROR',
  addMatch: 'ADD_MATCH',
  clearLatestAddedMatch: 'CLEAR_LAST',
};

export const setMatches = matches => {
  return {
    type: matchActionTypes.setMatches,
    payload: {matches},
  };
};

export const setError = error => {
  return {
    type: matchActionTypes.setError,
    payload: {error},
  };
};

export const addMatch = match => {
  return {
    type: matchActionTypes.addMatch,
    payload: {match},
  };
};

export const clearLatestAddedMatch = () => {
  return {
    type: matchActionTypes.clearLatestAddedMatch,
  };
};

