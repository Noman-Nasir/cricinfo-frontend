import {map} from 'lodash';
import {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import ErrorAlert from 'src/common/components/errorAlert';
import {ROLE_CODE_TO_ROLE} from 'src/players/constants';
import {TEAM_CODE_TO_TEAM} from 'src/teams/constants';

function AddTeamForm({onFormSubmit, players, submissionErrors}) {

  const [name, setName] = useState('AUS');
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [errors, setErrors] = useState(null);

  function submitHandler(event) {
    setErrors(null);
    event.preventDefault();
    if (selectedPlayers.length < 12 || selectedPlayers.length > 17) {
      setErrors(`A Team must have at-least 12 members and at max 17 members,
             You have selected:${selectedPlayers.length} players`);
      return;
    }
    onFormSubmit({
      name,
      players: selectedPlayers,
    });
  }

  let teamOptions = Object.keys(TEAM_CODE_TO_TEAM).map(key => {
    return <option key={key} value={key}>{TEAM_CODE_TO_TEAM[key]}</option>;
  });

  let playerOptions = map(players).map(player => {
    return <option key={player.id} value={player.id}>
      {player.firstName} {player.lastName} - {ROLE_CODE_TO_ROLE[player.role]} - {player.iccRanking}
    </option>;
  });

  function nameChangeHandler(event) {
    setName(event.target.value);
  }

  function playerChangeHandler(event) {
    let selectedOptions = event.target.selectedOptions;
    let selectedPlayers = Object.keys(selectedOptions).map(key => selectedOptions[key].value);
    setSelectedPlayers(selectedPlayers);
  }

  return <Form onSubmit={submitHandler}>
    <h1>Add New Team</h1>

    <Form.Group className="mb-3">
      <Form.Label>Team</Form.Label>
      <Form.Select
        value={name}
        onChange={nameChangeHandler}
        required>
        {teamOptions}
      </Form.Select>
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Players</Form.Label>
      <Form.Select
        multiple
        value={selectedPlayers}
        onChange={playerChangeHandler}
        required>
        {playerOptions}
      </Form.Select>
    </Form.Group>

    {
      errors && <ErrorAlert error={errors} header={'Validation Error'}/>
    }
    {
      submissionErrors &&
      <ErrorAlert
        error={submissionErrors}
        header={'Error Submitting Form'}
      />
    }
    <Button variant="primary" type="submit">
      Add Team
    </Button>
  </Form>;
}

export default AddTeamForm;
