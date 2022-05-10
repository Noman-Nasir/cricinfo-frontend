import React, {useEffect} from 'react';
import {Tab, Tabs} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';

import ErrorAlert from '../../common/components/errorAlert';
import LoadingPage from '../../common/components/loadingPage';
import {getPlayersSelector} from '../selector';
import {getAllPlayers} from '../thunk';

import PlayerList from './playerList/playerList';

function PlayersPage() {

  const dispatch = useDispatch();
  const players = useSelector(getPlayersSelector);

  useEffect(() => {
    dispatch(getAllPlayers());
  }, [dispatch]);

  if (players.error)
    return <ErrorAlert error={players.data} header="Fetching Players Failed"/>;
  if (players.data)
    return <Tabs defaultActiveKey="All" id="uncontrolled-tab-example" className="mb-3" variant="tabs">
      <Tab eventKey="All" title="All">
        <PlayerList players={players.data}/>
      </Tab>
      <Tab eventKey="Batters" title="Batters">
        <PlayerList role={'BA'} players={players.data}/>
      </Tab>
      <Tab eventKey="Bowlers" title="Bowlers">
        <PlayerList role={'BO'} players={players.data}/>
      </Tab>
      <Tab eventKey="WK" title="Wicket Keepers">
        <PlayerList role={'WK'} players={players.data}/>
      </Tab>
    </Tabs>;
  else
    return <LoadingPage/>;
}

export default PlayersPage;
