import {keyBy} from 'lodash';
import {seriesActionTypes} from 'src/series/action';

const initialSeriesState = {
  data: null,
  error: false,
};

export default function seriesReducer(state = initialSeriesState, action) {

  switch (action.type) {
    case seriesActionTypes.setSeries:
      return {
        data: keyBy(action.payload.series, 'id'),
      };

    case seriesActionTypes.setError:
      return {
        data: action.payload.error,
        error: true,
      };

    case seriesActionTypes.addSeries:
      return {
        data: {
          ...state.data,
          [action.payload.series.id]: action.payload.series,
        },
        latestAddedSeries: action.payload.series,
      };

    case seriesActionTypes.clearLatestAddedSeries:
      return {
        data: state.error ? null : state.data,
        error: false,
        latestAddedSeries: null,
      };

    default:
      return state;
  }
}
