import {useEffect} from 'react';
import {Button} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import FeedbackAlert from 'src/common/components/feedbackAlert';
import {clearLatestAddedPlayer} from 'src/players/action';
import PlayerCard from 'src/players/components/playerDetail/playerCard';
import {getPlayersSelector} from 'src/players/selector';
import {addNewPlayer} from 'src/players/thunk';

import AddPlayerForm from './addPlayerForm';

function AddPlayer() {

  const dispatch = useDispatch();
  const players = useSelector(getPlayersSelector);

  useEffect(() => {
    dispatch(clearLatestAddedPlayer());
    return () => dispatch(clearLatestAddedPlayer());
  }, [dispatch]);

  async function submitHandler(rawPlayer) {
    dispatch(addNewPlayer(rawPlayer));
  }

  function addAnotherPlayerClickHandler() {
    dispatch(clearLatestAddedPlayer());
  }

  if (players.latestAddedPlayer)
    return <>
      <FeedbackAlert header={'Player Added Successfully'}/>
      <PlayerCard player={players.latestAddedPlayer}/>
      <Button onClick={addAnotherPlayerClickHandler}>Add another player</Button>
    </>;

  return <AddPlayerForm
    onFormSubmit={submitHandler}
    submissionError={players.error && players.data}
  />;
}

export default AddPlayer;
