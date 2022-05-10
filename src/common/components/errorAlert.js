import React, {useEffect, useState} from 'react';
import {Alert} from 'react-bootstrap';

function ErrorAlert(props) {

  const [showError, setShowError] = useState(true);

  function closeHandler() {
    setShowError(false);
  }

  useEffect(() => {
    setShowError(true);
  }, [props.error]);

  let errors;
  if (props.error && props.error.constructor === Array) {
    errors = props.error.map((error, index) => <p key={index}>{error}</p>);
  } else {
    errors = props.error;
  }

  return (<>
      {
        showError &&
        <Alert className="w-75" variant="danger" onClose={closeHandler}
               dismissible>
          {props.header && <Alert.Heading>{props.header}</Alert.Heading>}
          <div>
            {errors}
          </div>
        </Alert>
      }
    </>
  );
}

export default ErrorAlert;
