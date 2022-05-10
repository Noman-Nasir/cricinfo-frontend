import {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import ErrorAlert from '../../../../common/components/errorAlert';

function VerifyEmailForm(props) {

  const [verificationCode, setVerificationCode] = useState('');
  const [errors, setErrors] = useState(null);

  function verificationCodeChangeHandler(event) {
    setVerificationCode(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    setErrors(null);
    if (verificationCode.length === 4)
      props.onFormSubmit({
        'verification_code': verificationCode,
      });
    else {
      setErrors(
        <ErrorAlert error="Code must be 4 characters long"/>,
      );
    }
  }

  return (
    <Form onSubmit={submitHandler}>
      <h1>Verify Email</h1>

      <Form.Group className="mb-3" controlId="formGridUsername">
        <Form.Label>Verification Code</Form.Label>
        <Form.Control onChange={verificationCodeChangeHandler} type="number" required
                      placeholder="4-digit Code"/>
      </Form.Group>

      {errors}

      <Button className="d-flex justify-content-center" variant="primary" type="submit">
        Verify
      </Button>
    </Form>
  );
}

export default VerifyEmailForm;
