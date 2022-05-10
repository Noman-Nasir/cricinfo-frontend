import {addTeam, setError, setTeams} from 'src/teams/action';
import {fetchAllTeams, fetchTeamById, postNewTeam} from './network';

export const getAllTeams = () => {
  return async (dispatch) => {
    try {
      let teams = await fetchAllTeams();
      dispatch(setTeams(teams));
    } catch (error) {
      dispatch(setError(error));
    }
  };
};

export const getTeamById = (id) => {
  return async (dispatch, getState) => {
    id = parseInt(id);
    let team = getState().team.data && getState().team.data[id];
    if (!team)
      try {
        team = await fetchTeamById(id);
        dispatch(addTeam(team));
      } catch (error) {
        dispatch(setError(error));
      }
  };
};

export const addNewTeam = (team) => {

  return async (dispatch) => {

    try {
      let addedTeam = await postNewTeam(team);
      dispatch(addTeam(addedTeam));
    } catch (error) {
      dispatch(setError(error));
    }

  };
};
