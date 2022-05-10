import {useState} from 'react';
import {Button, Form} from 'react-bootstrap';

import ErrorAlert from 'src/common/components/errorAlert';

function AddGroundForm({onFormSubmit, submissionErrors}) {

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [headCurator, setHeadCurator] = useState('');

  function submitHandler(event) {
    event.preventDefault();
    onFormSubmit({
      name,
      address,
      headCurator,
    });
  }

  return <Form onSubmit={submitHandler}>
    <h1>Add New Ground</h1>

    <Form.Group className="mb-3">
      <Form.Label>Name</Form.Label>
      <Form.Control
        value={name}
        onChange={event => setName(event.target.value)}
        placeholder="Enter Ground Name"
        required
      />
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Address</Form.Label>
      <Form.Control
        value={address}
        onChange={event => setAddress(event.target.value)}
        placeholder="Enter Ground Address"
        required
      />
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Head Curator</Form.Label>
      <Form.Control
        value={headCurator}
        onChange={event => setHeadCurator(event.target.value)}
        placeholder="Enter Head Curator Name"
        required
      />
    </Form.Group>
    {
      submissionErrors &&
      <ErrorAlert header="Failed to add ground" errors={submissionErrors}/>
    }
    <Button variant="primary" type="submit">
      Add Ground
    </Button>
  </Form>;
}

export default AddGroundForm;
