import {useEffect} from 'react';
import {Button} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';

import FeedbackAlert from 'src/common/components/feedbackAlert';
import {clearLatestAddedSeries} from 'src/series/action';
import {getSeriesSelector} from 'src/series/selector';
import {addNewSeries} from 'src/series/thunk';

import AddSeriesForm from './addSeriesForm';

function AddSeries() {

  const dispatch = useDispatch();
  const series = useSelector(getSeriesSelector);

  function submitHandler(rawSeries) {
    dispatch(addNewSeries(rawSeries));
  }

  useEffect(() => {
    dispatch(clearLatestAddedSeries());
    return () => dispatch(clearLatestAddedSeries());
  }, [dispatch]);

  function addAnotherSeriesClickHandler() {
    dispatch(clearLatestAddedSeries());
  }

  if (series.latestAddedSeries)
    return <>
      <FeedbackAlert
        header={'Series Added Successfully'}
        feedback={`New Series Id = ${series.latestAddedSeries.id}`}
      />
      <Button onClick={addAnotherSeriesClickHandler}>Add another series</Button>
    </>;

  return <AddSeriesForm
    onFormSubmit={submitHandler}
    submissionErrors={series.error && series.data}
  />;

}

export default AddSeries;
