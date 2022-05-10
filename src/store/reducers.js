import {combineReducers} from 'redux';
import groundReducer from 'src/admin/reducer';
import matchReducer from 'src/matches/reducer';
import playerReducer from 'src/players/reducer';
import seriesReducer from 'src/series/reducer';
import statsReducer from 'src/stats/reducer';
import teamReducer from 'src/teams/reducer';
import authReducer from 'src/users/reducer';

export default combineReducers({
  auth: authReducer,
  stats: statsReducer,
  player: playerReducer,
  match: matchReducer,
  team: teamReducer,
  series: seriesReducer,
  ground: groundReducer,
});
