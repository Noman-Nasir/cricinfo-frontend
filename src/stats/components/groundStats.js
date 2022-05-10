import React, {useEffect, useState} from 'react';
import {Alert} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';

import ErrorAlert from '../../common/components/errorAlert';
import LoadingPage from '../../common/components/loadingPage';
import {getGroundStatisticsAction} from '../actions';
import {groundStatsSelector} from '../selector';

function GroundStats() {

  const groundStats = useSelector(groundStatsSelector);
  const [page, setPage] = useState({state: 'loading', data: null});
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      let [pageState, data] = await dispatch(getGroundStatisticsAction());
      if (pageState === 'error')
        setPage({state: pageState, data});
    })();
  }, [dispatch]);

  if (groundStats)
    return <div className="row">
      <div className="col-3"/>
      <Alert className="col-6">{groundStats.ground.name} has hosted the most number of
        matches({groundStats.matchCount}), and is
        located at {groundStats.ground.address}. {groundStats.ground.headCurator} is the head curator of
        the ground.
      </Alert>
    </div>;
  else if (page.state === 'error')
    return <ErrorAlert error={page.data} header="Un Authorized User"/>;
  else
    return <LoadingPage/>;

}

export default GroundStats;
