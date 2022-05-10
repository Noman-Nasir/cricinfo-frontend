import {addGround, setError, setGrounds} from 'src/admin/action';
import {fetchAllGrounds} from 'src/common/services/network/common';
import {postNewGround} from './network';

export const getAllGrounds = () => {
  return async (dispatch) => {
    try {
      let grounds = await fetchAllGrounds();
      dispatch(setGrounds(grounds));
    } catch (error) {
      dispatch(setError(error));
    }

  };
};

export const addNewGround = (ground) => {
  return async (dispatch) => {
    try {
      let addedGround = await postNewGround(ground);
      console.log(addedGround);
      dispatch(addGround(addedGround));
    } catch (error) {
      dispatch(setError(error));
    }
  };
};
