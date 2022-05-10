import {keyBy} from 'lodash';
import {matchActionTypes} from 'src/matches/action';

const initialMatchState = {
  data: null,
  error: false,
};

export default function matchReducer(state = initialMatchState, action) {

  switch (action.type) {
    case matchActionTypes.setMatches:
      return {
        data: keyBy(action.payload.matches, 'id'),
      };

    case matchActionTypes.setError:
      return {
        data: action.payload.error,
        error: true,
      };

    case matchActionTypes.addMatch:
      return {
        data: {
          ...state.data,
          [action.payload.match.id]: action.payload.match,
        },
        latestAddedMatch: action.payload.match,
      };
    case matchActionTypes.clearLatestAddedMatch:
      return {
        data: state.error ? null : state.data,
        error: false,
        latestAddedMatch: null,
      };

    default:
      return state;
  }
}
