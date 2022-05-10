import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {getPlayersSelector} from 'src/players/selector';
import ErrorAlert from '../../../common/components/errorAlert';
import LoadingPage from '../../../common/components/loadingPage';
import {getPlayerById} from '../../thunk';
import PlayerCard from './playerCard';

function PlayerDetail() {

  const {id} = useParams();
  const dispatch = useDispatch();
  const players = useSelector(getPlayersSelector);

  useEffect(() => {
    dispatch(getPlayerById(id));
  }, [dispatch, id]);

  if (players.error)
    return <ErrorAlert error={players.data} header="Fetching Player Detail Failed"/>;

  if (players.data && players.data[id]) {
    let player = players.data[id];
    return <PlayerCard player={player}/>;
  }
  return <LoadingPage/>;

}

export default PlayerDetail;
