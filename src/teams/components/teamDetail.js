import React, {useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';

import ErrorAlert from 'src/common/components/errorAlert';
import LoadingPage from 'src/common/components/loadingPage';
import {ROLE_CODE_TO_ROLE} from 'src/players/constants';
import {getTeamById} from 'src/teams/thunk';
import {TEAM_CODE_TO_TEAM} from 'src/teams/constants';
import {getTeamsSelector} from 'src/teams/selector';

function TeamDetail() {

  const {id} = useParams();
  const dispatch = useDispatch();
  const teams = useSelector(getTeamsSelector);
  const history = useHistory();

  useEffect(() => {
    dispatch(getTeamById(id));
  }, [dispatch, id]);

  function tableClickHandler(event) {
    let playerId = event.target.parentNode.id;
    history.push('/players/' + playerId);
  }

  if (teams.error)
    return <ErrorAlert error={teams.data} header="Fetching Player Detail Failed"/>;

  if (teams.data && teams.data[id]) {
    console.log(teams.data[id]);
    return <>
      <p className={'h1'}>{TEAM_CODE_TO_TEAM[teams.data[id].name]}</p>
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
          teams.data[id].players.map((player) => {
            return <tr key={player.id} id={player.id}>
              <td>{player.firstName}</td>
              <td>{player.lastName}</td>
              <td>{ROLE_CODE_TO_ROLE[player.role]}</td>
            </tr>;
          })
        }
        </tbody>

      </Table>
    </>;
  }

  return <LoadingPage/>;

}

export default TeamDetail;
