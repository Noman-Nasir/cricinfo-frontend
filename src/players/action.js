export const playerActionTypes = {
  setPlayers: 'SET_PLAYERS',
  setError: 'SET_PLAYER_ERROR',
  addPlayer: 'ADD_PLAYER',
  clearLatestAddedPlayer: 'CLEAR_LAST',
};

export const setPlayers = players => {
  return {
    type: playerActionTypes.setPlayers,
    payload: {players},
  };
};

export const setError = error => {
  return {
    type: playerActionTypes.setError,
    payload: {error},
  };
};

export const addPlayer = player => {
  return {
    type: playerActionTypes.addPlayer,
    payload: {player},
  };
};

export const clearLatestAddedPlayer = () => {
  return {
    type: playerActionTypes.clearLatestAddedPlayer,
  };
};
