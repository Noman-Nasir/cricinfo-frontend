import {useEffect} from 'react';
import {Button} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {clearLatestAddedGround} from 'src/admin/action';
import {getGroundsSelector} from 'src/admin/selector';
import {addNewGround} from 'src/admin/thunk';

import FeedbackAlert from 'src/common/components/feedbackAlert';

import AddGroundForm from './addGroundForm';

function AddGround() {

  const dispatch = useDispatch();
  const grounds = useSelector(getGroundsSelector);

  useEffect(() => {
    dispatch(clearLatestAddedGround());
    return () => dispatch(clearLatestAddedGround());
  }, [dispatch]);

  function submitHandler(rawGround) {
    dispatch(addNewGround(rawGround));
  }

  function addAnotherGroundClickHandler() {
    dispatch(clearLatestAddedGround());
  }

  if (grounds.latestAddedGround)
    return <>
      <FeedbackAlert
        header={'Ground Added Successfully'}
        feedback={`New Ground Id = ${grounds.latestAddedGround.id}`}
      />
      <Button onClick={addAnotherGroundClickHandler}>Add another Ground</Button>
    </>;

  return <AddGroundForm
    onFormSubmit={submitHandler}
    submissionErrors={grounds.error && grounds.data}
  />;

}

export default AddGround;
