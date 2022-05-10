import {Tab, Tabs} from 'react-bootstrap';
import {useSelector} from 'react-redux';

import ErrorAlert from 'src/common/components/errorAlert';
import {userSelector} from 'src/users/selector';

import GroundStats from './groundStats';
import PlayerStatsTabs from './playerStatsTabs';

function StatsPage() {

  const user = useSelector(userSelector);

  return (
    user && user.isVerified ?
      <Tabs defaultActiveKey="All" id="uncontrolled-tab-example" className="mb-3" variant="tabs">
        <Tab eventKey="All" title="Ground Stats">
          <GroundStats/>
        </Tab>

        <Tab eventKey="Batters" title="Player Stats">
          <PlayerStatsTabs/>
        </Tab>
      </Tabs> :
      <ErrorAlert header={'Unauthorized User'} error={'Only verified users can view this section.'}/>
  );
}

export default StatsPage;
