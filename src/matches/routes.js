import {Route} from 'react-router-dom';

import MatchDetail from './components/matchDetail/matchDetail';
import MatchPage from './components/matchPage';

function MatchRoutes() {
  return (
    <>
      <Route path="/matches" component={MatchPage} exact/>
      <Route path="/matches/:id" component={MatchDetail}/>
    </>
  );
}

export default MatchRoutes;
