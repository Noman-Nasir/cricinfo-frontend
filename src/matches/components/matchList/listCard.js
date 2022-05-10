import React from 'react';
import {Card} from 'react-bootstrap';
import {dateDiffInDays, getMatchResultFromCode} from 'src/matches/helper';
import {TEAM_CODE_TO_TEAM} from 'src/teams/constants';

function MatchListCard(props) {
  let {match, category} = props;

  let cardText;
  if (category === 'live')
    cardText = <span className="d-flex justify-content-center text-danger">
        {'* Live'}
        </span>;
  else if (category === 'result')
    cardText = getMatchResultFromCode(match.result, match.teamA.name, match.teamB.name);
  else {
    const matchDate = new Date(match.matchDate), today = new Date(Date.now());
    cardText = <span className="d-flex justify-content-center text-info">
        {'Match starts in ' + dateDiffInDays(today, matchDate) + ' Days'}
        </span>;
  }
  return (
    <Card.Body className="m-3 p-3">
      <Card.Header className="d-flex justify-content-center">
        {TEAM_CODE_TO_TEAM[match.teamA.name]} vs {TEAM_CODE_TO_TEAM[match.teamB.name]}
      </Card.Header>

      <Card.Title className="mb-2 text-muted d-flex justify-content-center">
        {match.series}
      </Card.Title>

      <Card.Text className={' d-flex justify-content-center'}>
        {cardText}
        <br/>
      </Card.Text>

      <Card.Footer className="d-flex justify-content-center">
        {match.matchDate}
      </Card.Footer>
    </Card.Body>
  );

}

export default MatchListCard;
