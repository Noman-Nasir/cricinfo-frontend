import React from 'react';
import {useHistory} from 'react-router-dom';

function MatchTable(props) {

  const history = useHistory();

  function clickHandler(event) {
    if (event.target.parentNode.id)
      history.push(`/matches/${event.target.parentNode.id}`);
  }

  return (
    <tbody onClick={clickHandler}>
    <tr>
      <td>Match Number</td>
      <td>Match Date</td>
      <td>Ground</td>
    </tr>
    {
      props.matches.map((match, index) => {
        let rowClass;
        let today = new Date(Date.now()).setHours(0, 0, 0, 0);
        let matchDate = new Date(match.matchDate).setHours(0, 0, 0, 0);
        if (matchDate < today)
          rowClass = 'bg-success';
        else if (matchDate > today)
          rowClass = 'bg-info';
        else
          rowClass = 'bg-danger';

        return <tr key={match.id} id={match.id}>
          <td>{index + 1}</td>
          <td className={rowClass}>{match.matchDate}</td>
          <td>{match.venue.name}, {match.venue.address}</td>
        </tr>;
      })
    }
    </tbody>
  );
}

export default MatchTable;
