import {useEffect} from 'react';
import {Button} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';

import FeedbackAlert from 'src/common/components/feedbackAlert';
import LoadingPage from 'src/common/components/loadingPage';
import {getPlayersSelector} from 'src/players/selector';
import {getAllPlayers} from 'src/players/thunk';
import {clearLatestAddedTeam} from 'src/teams/action';
import {getTeamsSelector} from 'src/teams/selector';
import {addNewTeam} from 'src/teams/thunk';

import AddTeamForm from './addTeamForm';

function AddTeam() {

  const dispatch = useDispatch();
  const teams = useSelector(getTeamsSelector);
  const players = useSelector(getPlayersSelector);

  useEffect(() => {
    dispatch(clearLatestAddedTeam());
    dispatch(getAllPlayers());
    return () => dispatch(clearLatestAddedTeam());
  }, [dispatch]);

  function submitHandler(rawTeam) {
    dispatch(addNewTeam(rawTeam));
  }

  function addAnotherTeamClickHandler() {
    dispatch(clearLatestAddedTeam());
  }

  if (teams.latestAddedTeam)
    return <>
      <FeedbackAlert
        header={'Team Added Successfully'}
        feedback={`New Team Id = ${teams.latestAddedTeam.id}`}
      />
      <Button onClick={addAnotherTeamClickHandler}>Add another team</Button>
    </>;

  if (players.data)
    return <AddTeamForm
      players={players.data}
      submissionErrors={teams.error && teams.data}
      onFormSubmit={submitHandler}
    />;

  return <LoadingPage/>;

}

export default AddTeam;
