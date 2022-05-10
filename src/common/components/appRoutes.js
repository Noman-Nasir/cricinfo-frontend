import {Route, Switch} from 'react-router-dom';

import AdminRoutes from '../../admin/routes';
import MatchRoutes from '../../matches/routes';
import PlayerRoutes from '../../players/routes';
import SeriesRoutes from '../../series/routes';
import StatsPage from '../../stats/components/statsPage';
import TeamRoutes from '../../teams/routes';
import UserRoutes from '../../users/routes';
import HomePage from 'src/common/components/homePage';

import PageNotFound from './pageNotFound';

function AppRoutes() {

  return (
    <Switch>
      <Route path="/" exact component={HomePage}/>

      <Route path="/players" component={PlayerRoutes}/>

      <Route path="/users" component={UserRoutes}/>

      <Route path="/matches" component={MatchRoutes}/>

      <Route path="/teams" component={TeamRoutes}/>

      <Route path="/series" component={SeriesRoutes}/>

      <Route path="/admin" component={AdminRoutes}/>

      <Route path="/stats" component={StatsPage}/>

      <Route path="*" component={PageNotFound}/>
    </Switch>
  );
}

export default AppRoutes;
