import {map} from 'lodash';
import {useState} from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';

import ErrorAlert from 'src/common/components/errorAlert';
import {RESULT_CODES_TO_RESULT} from 'src/matches/constants';
import {TEAM_CODE_TO_TEAM} from 'src/teams/constants';

function AddMatchForm({series, grounds, teams, onFormSubmit, submissionErrors}) {

  series = map(series);
  grounds = map(grounds);
  teams = map(teams);

  const [teamA, setTeamA] = useState(teams.length && teams[0].id);
  const [teamB, setTeamB] = useState(teams.length && teams[0].id);
  const [matchDate, setMatchDate] = useState('');
  const [selectedSeries, setSelectedSeries] = useState(series.length && series[0].id);
  const [selectedGround, setSelectedGround] = useState(grounds.length && grounds[0].id);
  const [result, setResult] = useState('NR');
  const [validationErrors, setValidationErrors] = useState([]);

  function submitHandler(event) {
    event.preventDefault();
    if (isMatchValid())
      onFormSubmit({
        teamA,
        teamB,
        matchDate,
        series: selectedSeries,
        ground: selectedGround,
        result,
      });
  }

  function isMatchValid() {
    let errors = [];
    let teamAData = teams.find(team => team.id === parseInt(teamA));
    let teamBData = teams.find(team => team.id === parseInt(teamB));

    if (teamAData.id === teamBData.id) {
      errors.push('Both Teams must have different id\'s');
    }
    if (teamAData.name === teamBData.name) {
      errors.push('Both Teams must have different names');
    }
    let seriesData = series.find(singleSeries => singleSeries.id === parseInt(selectedSeries));
    let [matchDateObj, seriesStartDate, seriesEndDate] = [
      new Date(matchDate).setUTCHours(0, 0, 0, 0),
      new Date(seriesData.startDate).setUTCHours(0, 0, 0, 0),
      new Date(seriesData.endDate).setUTCHours(0, 0, 0, 0),
    ];
    if (matchDateObj < seriesStartDate) {
      errors.push('Match Date can not be before series start date');
    } else if (matchDateObj > seriesEndDate) {
      errors.push('Match Date can not be after series end date');
    }

    setValidationErrors(errors);
    if (!errors.length)
      return true;
  }

  let teamOptions = teams.map(team => {
    return <option key={team.id} value={team.id}>
      {TEAM_CODE_TO_TEAM[team.name]} - id:{team.id}
    </option>;
  });

  let groundOptions = grounds.map(ground => {
    return <option key={ground.id} value={ground.id}>
      {ground.name}, {ground.address}
    </option>;
  });

  let seriesOptions = series.map(series => {
    let content = series.matches && series.matches.length ?
      `${series.matches[0].teamA.name} vs ${series.matches[0].teamB.name} from 
            ${series.startDate} to ${series.endDate}` :
      `${series.startDate} to ${series.endDate}`;
    return <option key={series.id} value={series.id}>
      {content}
    </option>;
  });

  let resultOptions = Object.keys(RESULT_CODES_TO_RESULT).map(key => {
    return (<option key={key} value={key}>
      {RESULT_CODES_TO_RESULT[key]}
    </option>);
  });

  return <Form onSubmit={submitHandler}>
    <h1>Add New Match</h1>
    <Row className="mb-3">
      <Form.Group as={Col}>
        <Form.Label>Team A</Form.Label>
        <Form.Select
          value={teamA}
          onChange={(event => setTeamA(event.target.value))}
          required>
          {teamOptions}
        </Form.Select>
      </Form.Group>

      <Form.Group as={Col}>
        <Form.Label>Team B</Form.Label>
        <Form.Select
          value={teamB}
          onChange={(event => setTeamB(event.target.value))}
          required>
          {teamOptions}
        </Form.Select>
      </Form.Group>
    </Row>

    <Form.Group as={Col} className="mb-3">
      <Form.Label>Ground</Form.Label>
      <Form.Select
        value={selectedGround}
        onChange={(event => setSelectedGround(event.target.value))}
        required>
        {groundOptions}
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} className="mb-3">
      <Form.Label>Set Series</Form.Label>
      <Form.Select
        value={selectedSeries}
        onChange={(event => setSelectedSeries(event.target.value))}
        required>
        {seriesOptions}
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} className="mb-3">
      <Form.Label>Set Result</Form.Label>
      <Form.Select
        value={result}
        onChange={(event => setResult(event.target.value))}
        required>
        {resultOptions}
      </Form.Select>
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Match Date</Form.Label>
      <Form.Control
        type="date" value={matchDate}
        onChange={event => setMatchDate(event.target.value)}
        required/>
    </Form.Group>

    {
      validationErrors.length ?
        <ErrorAlert
          header="Invalid Match Details"
          error={validationErrors}/>
        : <></>
    }
    {
      submissionErrors &&
      <ErrorAlert header="Invalid Match Details" error={submissionErrors}/>
    }

    <Button variant="primary" type="submit">
      Add Match
    </Button>
  </Form>;
}

export default AddMatchForm;
