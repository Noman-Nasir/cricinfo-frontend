import {addPlayer, setError, setPlayers} from 'src/players/action';
import {fetchAllPlayers, fetchPlayerById, postNewPlayer} from './network';

export const getAllPlayers = () => {
  return async (dispatch) => {
    try {
      let players = await fetchAllPlayers();
      dispatch(setPlayers(players));
    } catch (error) {
      dispatch(setError(error));
    }
  };
};

export const getPlayerById = (id) => {

  return async (dispatch, getState) => {
    id = parseInt(id);
    let player = getState().player.data && getState().player.data[id];
    if (!player) {
      try {
        player = await fetchPlayerById(id);
        dispatch(addPlayer(player));
      } catch (error) {
        dispatch(setError(error));
      }
    }
  };
};

export const addNewPlayer = (player) => {

  return async (dispatch) => {
    try {
      let addedPlayer = await postNewPlayer(player);
      dispatch(addPlayer(addedPlayer));
    } catch (error) {
      dispatch(setError(error));
    }

  };
};
