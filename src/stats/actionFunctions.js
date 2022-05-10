export const statisticActionTypes = {
  setGroundStats: 'FETCH_GROUND_STATS',
  setPlayerStats: 'FETCH_PLAYER_STATS',
};

export const setGroundStats = groundStats => {
  return {
    type: statisticActionTypes.setGroundStats,
    payload: {groundStats},
  };
};
export const setPlayerStats = playerStats => {
  return {
    type: statisticActionTypes.setPlayerStats,
    payload: {playerStats},
  };
};
