import React from 'react';
import {Table} from 'react-bootstrap';
import {ROLE_CODE_TO_ROLE} from 'src/players/constants';
import {TEAM_CODE_TO_TEAM} from 'src/teams/constants';

function Squad(props) {
  return (
    <>
      <p className="h3 d-flex justify-content-center">
        {TEAM_CODE_TO_TEAM[props.team.name]} Squad
      </p>
      <Table bordered>
        <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Role</th>
        </tr>
        </thead>
        <tbody>
        {
          props.team.players.map((player) => {
            return <tr key={player.id} id={player.id}>
              <td>{player.firstName}</td>
              <td>{player.lastName}</td>
              <td>{ROLE_CODE_TO_ROLE[player.role]}</td>
            </tr>;
          })
        }
        </tbody>
      </Table>
    </>
  );
}

export default Squad;
