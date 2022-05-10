import {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import ErrorAlert from 'src/common/components/errorAlert';

function AddSeriesForm({onFormSubmit, submissionErrors}) {

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  function submitHandler(event) {
    event.preventDefault();
    onFormSubmit({
      startDate,
      endDate,
    });
  }

  return <Form onSubmit={submitHandler}>
    <h1>Add New Series</h1>

    <Form.Group className="mb-3">
      <Form.Label>Start Date</Form.Label>
      <Form.Control
        required
        type="date"
        value={startDate}
        onChange={event => {
          setStartDate(event.target.value);
        }}
      />
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>End Date</Form.Label>
      <Form.Control
        required
        type="date"
        value={endDate} onChange={event => {
        setEndDate(event.target.value);
      }}/>
    </Form.Group>

    {
      submissionErrors &&
      <ErrorAlert
        error={submissionErrors}
        header={'Error Submitting Form'}
      />
    }

    <Button variant="primary" type="submit">
      Add Series
    </Button>
  </Form>;
}

export default AddSeriesForm;
