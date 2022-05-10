import React, {useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

import ErrorAlert from 'src/common/components/errorAlert';
import LoadingPage from 'src/common/components/loadingPage';
import {getMatchResultFromCode} from 'src/matches/helper';
import {getMatchSelector} from 'src/matches/selector';
import {getMatchById} from 'src/matches/thunk';
import {TEAM_CODE_TO_TEAM} from 'src/teams/constants';

import Squad from './squad';

function MatchDetail() {

  const {id} = useParams();
  const dispatch = useDispatch();
  const matches = useSelector(getMatchSelector);

  useEffect(() => {
    dispatch(getMatchById(id));
  }, [dispatch, id]);

  if (matches.error)
    return <ErrorAlert error={matches.data} header="Fetching Match Details Failed"/>;

  if (matches.data) {
    const match = matches.data[id];
    let today = new Date(Date.now()).setHours(0, 0, 0, 0);
    let matchDate = new Date(match.matchDate).setHours(0, 0, 0, 0);
    let result;
    if (matchDate < today) {
      result = getMatchResultFromCode(match.result, match.teamA.name, match.teamB.name);
    } else if (matchDate > today)
      result = <span className="h2 d-flex justify-content-center text-info">
        Match Yet to Begin
      </span>;
    else
      result = <span className="h2 d-flex justify-content-center text-danger">
        Match is Live
      </span>;

    return (
      <>
        <p className="h1 d-flex justify-content-center">{
          TEAM_CODE_TO_TEAM[match.teamA.name]} vs {TEAM_CODE_TO_TEAM[match.teamB.name]}
        </p>
        <p className="h4 d-flex justify-content-center">
          Ground: {match.venue.name}, {match.venue.address}
        </p>
        <p className={'h2'}>
          {result}
        </p>
        <Table>
          <tbody>
          <tr>
            <td><Squad team={match.teamA}/></td>
            <td><Squad team={match.teamB}/></td>
          </tr>
          </tbody>
        </Table>
      </>
    );
  }

  return <LoadingPage/>;

}

export default MatchDetail;
