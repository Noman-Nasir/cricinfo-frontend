import React, {useEffect, useState} from 'react';
import {Alert} from 'react-bootstrap';

function FeedbackAlert(props) {

  const [showFeedback, setShowFeedback] = useState(true);

  function closeHandler() {
    setShowFeedback(false);
  }

  useEffect(() => {
    setShowFeedback(true);
  }, [props]);

  let feedback;
  if (props.feedback && props.feedback.constructor === Array)
    feedback = props.feedback.map((feedback, index) => <p key={index}>{feedback}</p>);
  else
    feedback = props.feedback;

  return (
    showFeedback ?
      <Alert className="w-75" variant="info" onClose={closeHandler}
             dismissible>
        {props.header && <Alert.Heading>{props.header}</Alert.Heading>}
        <div>
          {feedback}
        </div>
      </Alert> : <></>
  );
}

export default FeedbackAlert;
