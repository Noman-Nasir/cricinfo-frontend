import {Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

function AdminPage() {
  const history = useHistory();
  return <>
    <Button onClick={() => {
      history.push('/admin/add-player');
    }}>Add Player</Button>

    <Button onClick={() => {
      history.push('/admin/add-team');
    }}>Add Team</Button>

    <Button onClick={() => {
      history.push('/admin/add-ground');
    }}>Add Ground</Button>

    <Button onClick={() => {
      history.push('/admin/add-series');
    }}>Add Series</Button>

    <Button onClick={() => {
      history.push('/admin/add-match');
    }}>Add Match</Button>
  </>;
}

export default AdminPage;
