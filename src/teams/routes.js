import {Route} from 'react-router-dom';

import TeamDetail from './components/teamDetail';
import TeamsPage from './components/teamsPage';

function TeamRoutes() {
  return (
    <>
      <Route path="/teams" component={TeamsPage} exact/>
      <Route path="/teams/:id" component={TeamDetail}/>
    </>
  );
}

export default TeamRoutes;
