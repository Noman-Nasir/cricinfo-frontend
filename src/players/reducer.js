import {keyBy} from 'lodash';
import {playerActionTypes} from 'src/players/action';

const initialPlayersState = {
  data: null,
  error: false,
};

export default function playerReducer(state = initialPlayersState, action) {

  switch (action.type) {

    case playerActionTypes.setPlayers:
      return {
        data: keyBy(action.payload.players, 'id'),
      };

    case playerActionTypes.setError:
      return {
        data: action.payload.error,
        error: true,
      };

    case playerActionTypes.addPlayer:
      return {
        data: {
          ...state.data,
          [action.payload.player.id]: action.payload.player
        },
        latestAddedPlayer: action.payload.player,
      };

    case playerActionTypes.clearLatestAddedPlayer:
      return {
        data: state.error ? null : state.data,
        error: false,
        latestAddedPlayer: null,
      };

    default:
      return state;
  }
}
