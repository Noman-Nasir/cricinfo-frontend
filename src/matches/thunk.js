import {addMatch, setError, setMatches} from 'src/matches/action';
import {getAllSeries} from '../series/thunk';
import {fetchAllMatches, fetchMatchById, postNewMatch} from './network';

export const getAllMatches = () => {

  return async (dispatch) => {
    try {
      let matches = await fetchAllMatches();
      dispatch(setMatches(matches));
    } catch (error) {
      dispatch(setError(error));
    }
  };
};

export const getMatchById = (id) => {

  return async (dispatch, getState) => {
    id = parseInt(id);
    let match = getState().match.data && getState().match.data[id];
    if (!match)
      try {
        match = await fetchMatchById(id);
        dispatch(addMatch(match));
      } catch (error) {
        dispatch(setError(error));
      }
  };
};

export const addNewMatch = (match) => {

  return async (dispatch) => {
    try {
      let addedMatch = await postNewMatch(match);
      dispatch(addMatch(addedMatch));
      dispatch(getAllSeries());
      return {
        'response': addedMatch,
      };
    } catch (error) {
      dispatch(setError(error));
      return {
        error,
      };
    }

  };
};
