export const groundActionTypes = {
  setGrounds: 'SET_GROUNDS',
  setError: 'SET_GROUND_ERROR',
  addGround: 'ADD_GROUND',
  clearLatestAddedGround: 'CLEAR_LAST',
};

export const setGrounds = grounds => {
  return {
    type: groundActionTypes.setGrounds,
    payload: {grounds},
  };
};

export const setError = error => {
  return {
    type: groundActionTypes.setError,
    payload: {error},
  };
};

export const addGround = ground => {
  return {
    type: groundActionTypes.addGround,
    payload: {ground},
  };
};

export const clearLatestAddedGround = () => {
  return {
    type: groundActionTypes.clearLatestAddedGround,
  };
};
