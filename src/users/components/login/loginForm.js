import {useState} from 'react';
import {Button, Form} from 'react-bootstrap';

function LoginForm(props) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function usernameChangeHandler(event) {
    setUsername(event.target.value);
  }

  function passwordChangeHandler(event) {
    setPassword(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    props.onFormSubmit({
      'username': username,
      'password': password,
    });
  }

  return (
    <Form onSubmit={submitHandler}>
      <h1>Login Form</h1>

      <Form.Group className="mb-3" controlId="formGridUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control onChange={usernameChangeHandler} minLength={4} required placeholder="Username"/>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formGridPass1">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={passwordChangeHandler} minLength={8} required type="password"
                      placeholder="Enter Password"/>
      </Form.Group>

      {props.errors}

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
}

export default LoginForm;
