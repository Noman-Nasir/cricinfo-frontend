import {Col, Container, Nav, Row, Tab} from 'react-bootstrap';

import PlayerStats from './playerStats';

function PlayerStatsTabs() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="any">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="any">Most Visited Player</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="batter">Most Visited Batter</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="bowler">Most Visited Bowler</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="wk">Most Visited Wicket Keeper</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="allRounder">Most Visited All Rounder</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Container>
            <Tab.Content>
              <Tab.Pane eventKey="any">
                <PlayerStats role={'any'}/>
              </Tab.Pane>
              <Tab.Pane eventKey="batter">
                <PlayerStats role="BA"/>
              </Tab.Pane>
              <Tab.Pane eventKey="bowler">
                <PlayerStats role="BO"/>
              </Tab.Pane>
              <Tab.Pane eventKey="wk">
                <PlayerStats role="WK"/>
              </Tab.Pane>
              <Tab.Pane eventKey="allRounder">
                <PlayerStats role="AR"/>
              </Tab.Pane>
            </Tab.Content>
          </Container>

        </Col>
      </Row>
    </Tab.Container>
  );
}

export default PlayerStatsTabs;
