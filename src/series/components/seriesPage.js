import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import SeriesTabs from 'src/series/components/seriesTabs';
import ErrorAlert from 'src/common/components/errorAlert';
import LoadingPage from 'src/common/components/loadingPage';

import {getAllSeries} from '../thunk';
import {getSeriesSelector} from '../selector';

function SeriesPage() {

  const dispatch = useDispatch();
  const series = useSelector(getSeriesSelector);

  useEffect(() => {
    dispatch(getAllSeries());
  }, [dispatch]);

  if (series.error)
    return <ErrorAlert error={series.data} header="Fetching Series Failed"/>;

  if (series.data)
    return <SeriesTabs series={series.data}/>;

  else
    return <LoadingPage/>;

}

export default SeriesPage;
