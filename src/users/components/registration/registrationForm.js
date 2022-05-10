import {useState} from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';

function RegistrationForm(props) {

  const [username, setUsername] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function firstNameChangeHandler(event) {
    setFirstName(event.target.value);
  }

  function lastNameChangeHandler(event) {
    setLastName(event.target.value);
  }

  function emailChangeHandler(event) {
    setEmail(event.target.value);
  }

  function usernameChangeHandler(event) {
    setUsername(event.target.value);
  }

  function password1ChangeHandler(event) {
    setPassword1(event.target.value);
  }

  function password2ChangeHandler(event) {
    setPassword2(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    props.onFormSubmit({
      'username': username,
      'password': password1,
      'password2': password2,
      'email': email,
      'first_name': firstName,
      'last_name': lastName,
    });
  }

  return (
    <Form onSubmit={submitHandler}>
      <h1>Registration Form</h1>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control onChange={firstNameChangeHandler} required aria-required
                        placeholder="Enter first name"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control onChange={lastNameChangeHandler} required placeholder="Enter last name"/>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control onChange={usernameChangeHandler} minLength={4} required placeholder="Username"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control onChange={emailChangeHandler} type="email" required placeholder="Enter email"/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridPass1">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={password1ChangeHandler} minLength={8} required type="password"
                      placeholder="Enter Password"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridPass2">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control onChange={password2ChangeHandler} minLength={8} required type="password"
                      placeholder="Confirm Password"/>
      </Form.Group>

      {props.errors}

      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
}

export default RegistrationForm;
