import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import ErrorAlert from 'src/common/components/errorAlert';
import LoadingPage from 'src/common/components/loadingPage';
import MatchesTabs from 'src/matches/components/matchesTabs';
import {getMatchSelector} from '../selector';
import {getAllMatches} from '../thunk';

function MatchPage() {

  const dispatch = useDispatch();
  const matches = useSelector(getMatchSelector);

  useEffect(() => {
    dispatch(getAllMatches());
  }, [dispatch]);

  if (matches.error)
    return <ErrorAlert error={matches.data} header="Fetching Matches Failed"/>;
  if (matches.data)
    return <MatchesTabs matches={matches.data}/>;
  else
    return <LoadingPage/>;

}

export default MatchPage;
