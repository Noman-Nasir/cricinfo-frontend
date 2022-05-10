import {keyBy} from 'lodash';
import {groundActionTypes} from 'src/admin/action';

const initialGroundsState = {
  data: null,
  error: false,
};

export default function groundReducer(state = initialGroundsState, action) {

  switch (action.type) {

    case groundActionTypes.setGrounds:
      return {
        data: keyBy(action.payload.grounds, 'id'),
      };

    case groundActionTypes.setError:
      return {
        data: action.payload.error,
        error: true,
      };

    case groundActionTypes.addGround:
      return {
        data: {
          ...state.data,
          [action.payload.ground.id]: action.payload.ground,
        },
        latestAddedGround: action.payload.ground,
      };

    case groundActionTypes.clearLatestAddedGround:
      return {
        data: state.error ? null : state.data,
        error: false,
        latestAddedGround: null,
      };

    default:
      return state;
  }
}
