import {useState} from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';

import ErrorAlert from 'src/common/components/errorAlert';

function AddPlayerForm({onFormSubmit, submissionError}) {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [iccRanking, setIccRanking] = useState('');
  const [avatar, setAvatar] = useState('');
  const [bowlingStyle, setBowlingStyle] = useState('LF');
  const [battingStyle, setBattingStyle] = useState('LH');
  const [playerRole, setPlayerRole] = useState('BA');
  const [address, setAddress] = useState('');
  const [bio, setBio] = useState('');

  function submitHandler(event) {
    event.preventDefault();
    onFormSubmit({
      firstName,
      lastName,
      dateOfBirth,
      iccRanking,
      avatar,
      playerRole,
      bowlingStyle,
      battingStyle,
      address,
      bio,
    });
  }

  return <Form onSubmit={submitHandler}>
    <h1>Add New Player</h1>

    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          value={firstName}
          onChange={event => setFirstName(event.target.value)}
          required
          placeholder="Enter first name"
        />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          value={lastName}
          onChange={event => setLastName(event.target.value)}
          required
          placeholder="Enter last name"
        />
      </Form.Group>
    </Row>

    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridDOB">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control
          value={dateOfBirth}
          onChange={event => setDateOfBirth(event.target.value)}
          required
          type="date"
          placeholder="Enter Date of Birth"
        />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridRanking">
        <Form.Label>ICC Ranking</Form.Label>
        <Form.Control
          value={iccRanking}
          onChange={event => setIccRanking(event.target.value)}
          type="number"
          min={1}
          max={100}
          required
          placeholder="Enter ICC Ranking"
        />
      </Form.Group>
    </Row>

    <Row className="mb-3">
      <Form.Group as={Col} className="mb-3" controlId="formGridAvatar">
        <Form.Label>Image</Form.Label>
        <Form.Control
          onChange={event => setAvatar(event.target.files[0])}
          type="file"
          required
          accept=".jpg,.jpeg,.png"
        />
      </Form.Group>

      <Form.Group as={Col}>
        <Form.Label>Player Role</Form.Label>
        <Form.Select
          value={playerRole}
          onChange={event => setPlayerRole(event.target.value)}>
          <option value="BA">Batter</option>
          <option value="BO">Bowler</option>
          <option value="AR">All Rounder</option>
          <option value="WK">Wicket Keeper</option>
        </Form.Select>
      </Form.Group>
    </Row>

    <Row className="mb-3">
      <Form.Group as={Col}>
        <Form.Label>Bowling Style</Form.Label>
        <Form.Select
          value={bowlingStyle}
          onChange={event => setBowlingStyle(event.target.value)}>
          <option value="LF">Left Arm Fast</option>
          <option value="LM">Left Arm Medium</option>
          <option value="LO">Left Arm Offspin</option>
          <option value="CM">Chinaman</option>
          <option value="RF">Right Arm Fast</option>
          <option value="RM">Right Arm Medium</option>
          <option value="RO">Right Arm Offspin</option>
          <option value="RL">Right Arm Legspin</option>
        </Form.Select>
      </Form.Group>

      <Form.Group as={Col}>
        <Form.Label>Batting Style</Form.Label>
        <Form.Select
          value={battingStyle}
          required
          onChange={event => setBattingStyle(event.target.value)}>
          <option value="LH">Left Handed</option>
          <option value="RH">Right Handed</option>
        </Form.Select>
      </Form.Group>
    </Row>

    <Form.Group className="mb-3" controlId="formGridAddress">
      <Form.Label>Address</Form.Label>
      <Form.Control
        value={address}
        onChange={event => setAddress(event.target.value)}
        required
        placeholder="Enter Player Address"
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formGridBio">
      <Form.Label>Bio</Form.Label>
      <Form.Control
        value={bio}
        onChange={event => setBio(event.target.value)}
        as="textarea"
        required
        placeholder="Enter Player Bio..."
      />
    </Form.Group>

    {
      submissionError &&
      <ErrorAlert
        header="Form Validation Failed"
        error={submissionError}
      />
    }

    <Button variant="primary" type="submit">
      Add Player
    </Button>
  </Form>;
}

export default AddPlayerForm;
