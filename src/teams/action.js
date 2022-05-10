export const teamActionTypes = {
  setTeams: 'SET_TEAMS',
  setError: 'SET_TEAM_ERROR',
  addTeam: 'ADD_TEAM',
  clearLatestAddedTeam: 'CLEAR_LAST',
};

export const setTeams = teams => {
  return {
    type: teamActionTypes.setTeams,
    payload: {teams},
  };
};

export const setError = error => {
  return {
    type: teamActionTypes.setError,
    payload: {error},
  };
};

export const addTeam = team => {
  return {
    type: teamActionTypes.addTeam,
    payload: {team},
  };
};

export const clearLatestAddedTeam = () => {
  return {
    type: teamActionTypes.clearLatestAddedTeam,
  };
};
