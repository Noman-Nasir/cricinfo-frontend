import {Route} from 'react-router-dom';

import SeriesDetail from './components/seriesDetail/seriesDetail';
import SeriesPage from './components/seriesPage';

function SeriesRoutes() {
  return (
    <>
      <Route path="/series" component={SeriesPage} exact/>
      <Route path="/series/:id" component={SeriesDetail}/>
    </>
  );
}

export default SeriesRoutes;
