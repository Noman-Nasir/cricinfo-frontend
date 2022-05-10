import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import ErrorAlert from 'src/common/components/errorAlert';
import LoadingPage from 'src/common/components/loadingPage';
import {getAllTeams} from 'src/teams/thunk';
import {getTeamsSelector} from 'src/teams/selector';

import TeamList from './teamList';

function TeamsPage() {

  const dispatch = useDispatch();
  const teams = useSelector(getTeamsSelector);

  useEffect(() => {
    dispatch(getAllTeams());
  }, [dispatch]);

  if (teams.error)
    return <ErrorAlert error={teams.data} header="Fetching Players Failed"/>;
  if (teams.data)
    return <TeamList teams={teams.data}/>;
  else
    return <LoadingPage/>;
}

export default TeamsPage;
