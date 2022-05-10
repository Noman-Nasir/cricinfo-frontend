export const seriesActionTypes = {
  setSeries: 'SET_SERIES',
  setError: 'SET_SERIES_ERROR',
  addSeries: 'ADD_SERIES',
  clearLatestAddedSeries: 'CLEAR_LAST',
};

export const setSeries = series => {
  return {
    type: seriesActionTypes.setSeries,
    payload: {series},
  };
};

export const setError = error => {
  return {
    type: seriesActionTypes.setError,
    payload: {error},
  };
};

export const addSeries = series => {
  return {
    type: seriesActionTypes.addSeries,
    payload: {series},
  };
};

export const clearLatestAddedSeries = () => {
  return {
    type: seriesActionTypes.clearLatestAddedSeries,
  };
};
