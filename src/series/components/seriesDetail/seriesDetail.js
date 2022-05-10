import React, {useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

import ErrorAlert from 'src/common/components/errorAlert';
import LoadingPage from 'src/common/components/loadingPage';
import {getSeriesSelector} from 'src/series/selector';
import {getSeriesById} from 'src/series/thunk';
import {TEAM_CODE_TO_TEAM} from 'src/teams/constants';

import MatchTable from './seriesMatchTable';

function SeriesDetail() {

  const {id} = useParams();
  const dispatch = useDispatch();
  const series = useSelector(getSeriesSelector);

  useEffect(() => {
    dispatch(getSeriesById(id));
  }, [dispatch, id]);

  if (series.error)
    return <ErrorAlert error={series.data} header="Fetching Series Details Failed"/>;

  if (series.data && series.data[id]) {
    return <Table>
      <thead>
      <tr>
        <th/>
        <th>{TEAM_CODE_TO_TEAM[series.data[id].matches[0].teamA.name]} vs {TEAM_CODE_TO_TEAM[series.data[id].matches[0].teamB.name]}</th>
        <th/>
      </tr>
      <tr>
        <th/>
        <th>From: {series.data[id].startDate} to {series.data[id].startDate}</th>
        <th/>
      </tr>
      </thead>
      <MatchTable matches={series.data[id].matches}/>
    </Table>;
  }
  return <LoadingPage/>;

}

export default SeriesDetail;
