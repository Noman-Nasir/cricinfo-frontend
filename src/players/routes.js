import {Route} from 'react-router-dom';

import PlayerDetail from './components/playerDetail/playerDetail';
import PlayersPage from './components/playersPage';

function PlayerRoutes() {
  return (
    <>
      <Route path="/players" component={PlayersPage} exact/>
      <Route path="/players/:id" component={PlayerDetail}/>
    </>
  );
}

export default PlayerRoutes;
