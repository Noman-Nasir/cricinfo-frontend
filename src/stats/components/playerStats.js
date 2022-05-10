import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import ErrorAlert from '../../common/components/errorAlert';
import LoadingPage from '../../common/components/loadingPage';
import {getPlayersStatisticsAction} from '../actions';
import {playerStatsSelector} from '../selector';

function PlayerStats(props) {

  const playerStats = useSelector(playerStatsSelector);
  const [page, setPage] = useState({state: 'loading', data: null});
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      let [pageState, data] = await dispatch(getPlayersStatisticsAction());
      if (pageState === 'error')
        setPage({state: pageState, data});
    })();
  }, [dispatch]);

  if (playerStats) {
    let playerStatsPerRole = playerStats[props.role];
    return <>
      <Link to={'/players/' + playerStatsPerRole.player.id}>
        {playerStatsPerRole.player.firstName} {playerStatsPerRole.player.lastName}
      </Link> has been viewed {playerStatsPerRole.visitCount} times.
    </>;
  } else if (page.state === 'error')
    return <ErrorAlert error={page.data} header="Un Authorized User"/>;
  else
    return <LoadingPage/>;

}

export default PlayerStats;
