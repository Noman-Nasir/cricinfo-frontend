import {map} from 'lodash';
import React from 'react';
import {Tab, Tabs} from 'react-bootstrap';
import SeriesList from 'src/series/components/seriesList/seriesList';

function SeriesTabs(props) {

  let series = map(props.series);
  let recentSeries = [], liveSeries = [], futureSeries = [];
  let today = new Date(Date.now()).setUTCHours(0, 0, 0, 0);

  for (let singleSeries of series) {
    if (new Date(singleSeries.endDate) < today)
      recentSeries.push(singleSeries);
    else if (new Date(singleSeries.startDate) > today)
      futureSeries.push(singleSeries);
    else
      liveSeries.push(singleSeries);
  }

  return <Tabs defaultActiveKey="live" className="mb-3" variant="tabs">
    <Tab eventKey="recent" title="Recent Results">
      <p className="h3">Recent Series</p>
      <SeriesList series={recentSeries.reverse()} category="result"/>
    </Tab>

    <Tab eventKey="live" title="Live">
      <p className="h3">Ongoing Series</p>
      <SeriesList series={liveSeries} category="live"/>
    </Tab>

    <Tab eventKey="future" title="Future Fixtures">
      <p className="h3">Scheduled Series</p>
      <SeriesList series={futureSeries} category="fixture"/>
    </Tab>
  </Tabs>;
}

export default SeriesTabs;
