import {addSeries, setError, setSeries} from 'src/series/action';
import {fetchAllSeries, fetchSeriesById, postNewSeries} from './network';

export const getAllSeries = () => {
  return async (dispatch) => {
    try {
      let series = await fetchAllSeries();
      dispatch(setSeries(series));
    } catch (error) {
      dispatch(setError(error));
    }
  };
};

export const getSeriesById = (id) => {

  return async (dispatch, getState) => {
    id = parseInt(id);
    let series = getState().series.data && getState().series.data[id];
    if (!series)
      try {
        series = await fetchSeriesById(id);
        dispatch(addSeries(series));
      } catch (error) {
        dispatch(setError(error));
      }
  };
};

export const addNewSeries = (series) => {
  return async (dispatch) => {
    try {
      let addedSeries = await postNewSeries(series);
      dispatch(addSeries(addedSeries));
    } catch (error) {
      dispatch(setError(error));

    }
  };
};
