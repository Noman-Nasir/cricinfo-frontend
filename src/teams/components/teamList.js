import {map} from 'lodash';
import React from 'react';
import {Accordion, Button, Container, Table} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

import {ROLE_CODE_TO_ROLE} from 'src/players/constants';
import {TEAM_CODE_TO_TEAM} from 'src/teams/constants';

function TeamList(props) {

  const history = useHistory();

  function tableClickHandler(event) {
    let playerId = event.target.parentNode.id;
    history.push('/players/' + playerId);
  }

  function teamClickHandler(event) {
    let teamId = event.target.parentNode.parentNode.parentNode.id;
    history.push('/teams/' + teamId);
  }

  let teams = map(props.teams);
  let teamsList = teams.map((team) => {
      return <Accordion.Item eventKey={team.id} key={team.id} id={team.id}>
        <Accordion.Header>{TEAM_CODE_TO_TEAM[team.name]}</Accordion.Header>
        <Accordion.Body>
          <Button className="my-2" onClick={teamClickHandler}>Open Team Detail</Button>
          <Table bordered hover responsive="sm" onClick={tableClickHandler}>
            <thead>
            <tr>
              <th colSpan="3">Players</th>
            </tr>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Role</th>
            </tr>
            </thead>

            <tbody>
            {
              team.players.map((player) => {
                return <tr key={player.id} id={player.id}>
                  <td>{player.firstName}</td>
                  <td>{player.lastName}</td>
                  <td>{ROLE_CODE_TO_ROLE[player.role]}</td>
                </tr>;
              })
            }
            </tbody>

          </Table>
        </Accordion.Body>
      </Accordion.Item>;
    },
  );

  return (
    <Container className="p-2">
      <Accordion>
        {teamsList}
      </Accordion>
    </Container>
  );

}

export default TeamList;
