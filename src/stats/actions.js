import {PLAYER_ROLES} from '../players/constants';

import {setGroundStats, setPlayerStats} from './actionFunctions';
import {getMostVisitedGround, getMostVisitedPlayer} from './network';

export const getGroundStatisticsAction = () => {

  return async (dispatch) => {
    try {
      let groundStats = await getMostVisitedGround();
      dispatch(setGroundStats(groundStats));
      return ['response', groundStats];
    } catch (errors) {
      return ['error', errors];
    }

  };
};

export const getPlayersStatisticsAction = () => {

  return async (dispatch) => {

    try {
      let playerStats = {};
      for (let playerRole of PLAYER_ROLES) {
        let playerStatPerType = await getMostVisitedPlayer(playerRole);
        playerStats = {
          ...playerStats,
          [playerRole]: playerStatPerType,
        };
      }
      dispatch(setPlayerStats(playerStats));
      return ['response', playerStats];
    } catch (errors) {
      return ['error', errors];
    }
  };
};
