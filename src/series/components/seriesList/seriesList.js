import React from 'react';
import {Table} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

function SeriesList(props) {

  const history = useHistory();

  let series = props.series.map((singleSeries) => {
      return singleSeries.matches.length ?
        <tr id={singleSeries.id} key={singleSeries.id}>
          <td onClick={(event) => {
            history.push(`/series/${event.target.parentNode.id}`);
          }}>
            {singleSeries.matches[0].teamA.name} vs {singleSeries.matches[0].teamB.name} from {singleSeries.startDate} to {singleSeries.endDate}
          </td>
        </tr> : <tr id={singleSeries.id} key={singleSeries.id}/>;
    },
  );

  return <Table borderless>
    <tbody>
    {series}
    </tbody>
  </Table>;

}

export default SeriesList;
