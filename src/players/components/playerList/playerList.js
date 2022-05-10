import {map} from 'lodash';
import React from 'react';
import {Container, Image, Table} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

import {ROLE_CODE_TO_ROLE} from '../../constants';

import './playerList.css';

function PlayerList(props) {

  const history = useHistory();

  let playersToDisplay = props.role ?
    map(props.players).filter(player => player.role === props.role) :
    map(props.players);

  let playerRows = playersToDisplay.map((player) => {
      return <tr key={player.id} id={player.id}>
        <td>
          <Image fluid className="avatar-thumbnail" src={player.avatar}/>
        </td>
        <td>{player.firstName}</td>
        <td>{player.lastName}</td>
        <td>{ROLE_CODE_TO_ROLE[player.role]}</td>
      </tr>;
    },
  );

  function clickHandler(event) {
    let playerId = event.target.parentNode.id;
    history.push('/players/' + playerId);
  }

  return (
    <Container className="p-2">
      <Table bordered hover responsive="sm" onClick={clickHandler}>

        <thead>
        <tr>
          <th/>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Role</th>
        </tr>
        </thead>

        <tbody>
        {playerRows}
        </tbody>

      </Table>
    </Container>
  );

}

export default PlayerList;
