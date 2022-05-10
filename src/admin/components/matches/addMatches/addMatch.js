import {useEffect} from 'react';
import {Button} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {getGroundsSelector} from 'src/admin/selector';

import {getAllGrounds} from 'src/admin/thunk';
import ErrorAlert from 'src/common/components/errorAlert';
import FeedbackAlert from 'src/common/components/feedbackAlert';
import LoadingPage from 'src/common/components/loadingPage';
import {clearLatestAddedMatch} from 'src/matches/action';
import {getMatchSelector} from 'src/matches/selector';
import {addNewMatch} from 'src/matches/thunk';
import {getSeriesSelector} from 'src/series/selector';
import {getAllSeries} from 'src/series/thunk';
import {getTeamsSelector} from 'src/teams/selector';
import {getAllTeams} from 'src/teams/thunk';

import AddMatchForm from './addMatchForm';

function AddMatch() {

  const dispatch = useDispatch();

  const matches = useSelector(getMatchSelector);
  const series = useSelector(getSeriesSelector);
  const teams = useSelector(getTeamsSelector);
  const grounds = useSelector(getGroundsSelector);

  useEffect(() => {
    dispatch(clearLatestAddedMatch());
    dispatch(getAllSeries());
    dispatch(getAllTeams());
    dispatch(getAllGrounds());
    return () => dispatch(clearLatestAddedMatch());
  }, [dispatch]);

  function submitHandler(rawMatch) {
    dispatch(addNewMatch(rawMatch));
  }

  function addAnotherMatchClickHandler() {
    dispatch(clearLatestAddedMatch());
  }

  if (grounds.error || series.error || teams.error)
    return <ErrorAlert
      header="Failed to load data"
      error={`${grounds.data} ${series.data} ${teams.data}`}
    />;

  if (matches.latestAddedMatch)
    return <>
      <FeedbackAlert
        header={'Match Added Successfully'}
        feedback={`New Match Id = ${matches.latestAddedMatch.id}`}
      />
      <Button onClick={addAnotherMatchClickHandler}>Add another match</Button>
    </>;

  if (grounds.data && series.data && teams.data)
    return <AddMatchForm
      series={series.data}
      teams={teams.data}
      grounds={grounds.data}
      submissionErrors={matches.error && matches.data}
      onFormSubmit={submitHandler}
    />;

  return <LoadingPage/>;
}

export default AddMatch;
