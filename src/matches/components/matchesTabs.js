import {map} from 'lodash';
import React from 'react';
import {Tab, Tabs} from 'react-bootstrap';

import MatchList from 'src/matches/components/matchList/matchList';

function MatchesTabs(props) {

  let matches = map(props.matches);
  let recentMatches = [], liveMatches = [], futureMatches = [];
  let today = new Date(Date.now()).setHours(0, 0, 0, 0);
  for (let match of matches) {
    let matchDate = new Date(match.matchDate).setHours(0, 0, 0, 0);
    if (matchDate < today)
      recentMatches.push(match);
    else if (matchDate > today)
      futureMatches.push(match);
    else
      liveMatches.push(match);
  }
  return <Tabs defaultActiveKey="live" className="mb-3" variant="tabs">
    <Tab eventKey="recent" title="Recent Results">
      <MatchList matches={recentMatches.reverse()} category="result"/>
    </Tab>

    <Tab eventKey="live" title="Live">
      <MatchList matches={liveMatches} category="live"/>
    </Tab>

    <Tab eventKey="future" title="Future Fixtures">
      <MatchList matches={futureMatches} category="fixture"/>
    </Tab>
  </Tabs>;
}

export default MatchesTabs;
