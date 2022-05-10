import {keyBy} from 'lodash';
import {teamActionTypes} from 'src/teams/action';

const initialTeamsState = {
  data: null,
  error: false,
};

export default function teamReducer(state = initialTeamsState, action) {

  switch (action.type) {

    case teamActionTypes.setTeams:
      return {
        data: keyBy(action.payload.teams, 'id'),
      };

    case teamActionTypes.setError:
      return {
        data: action.payload.error,
        error: true,
      };

    case teamActionTypes.addTeam:
      return {
        data: {
          ...state.data,
          [action.payload.team.id]: action.payload.team,
        },
        latestAddedTeam: action.payload.team,
      };

    case teamActionTypes.clearLatestAddedTeam:
      return {
        data: state.error ? null : state.data,
        error: false,
        latestAddedTeam: null,
      };

    default:
      return state;
  }
}
