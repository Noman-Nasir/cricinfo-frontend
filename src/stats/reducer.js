import {statisticActionTypes} from './actionFunctions';

const initialStatisticState = {
  groundStats: null,
  playerStats: null,
};

export default function statsReducer(state = initialStatisticState, action) {

  switch (action.type) {
    case statisticActionTypes.setGroundStats:
      return {
        ...state,
        groundStats: action.payload.groundStats,
      };

    case statisticActionTypes.setPlayerStats:
      return {
        ...state,
        playerStats: action.payload.playerStats,
      };

    default:
      return state;
  }
}
