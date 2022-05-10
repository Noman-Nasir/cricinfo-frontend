import {Route} from 'react-router-dom';

import AdminPage from './components/adminPage';
import AddGround from './components/grounds/addGround/addGround';
import AddMatch from './components/matches/addMatches/addMatch';
import AddPlayer from './components/players/addPlayer/addPlayer';
import AddSeries from './components/series/addSeries/addSeries';
import AddTeam from './components/teams/addTeam/addTeam';

function AdminRoutes() {
  return (
    <>
      <Route path="/admin/" component={AdminPage} exact/>
      <Route path="/admin/add-player" component={AddPlayer} exact/>
      <Route path="/admin/add-team" component={AddTeam} exact/>
      <Route path="/admin/add-ground" component={AddGround} exact/>
      <Route path="/admin/add-series" component={AddSeries} exact/>
      <Route path="/admin/add-match" component={AddMatch} exact/>
    </>
  );
}

export default AdminRoutes;
