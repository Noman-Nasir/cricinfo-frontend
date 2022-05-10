import {Button, Card, ListGroup, ListGroupItem} from 'react-bootstrap';

function UserCard(props) {

  return (

    <div className="d-flex justify-content-center my-5">
      <Card style={{width: '25rem'}} border={'medium'}>

        <Card.Img className="p-5" src="/avatars/userAvatar.png"/>
        <Card.Body>
          <Card.Title
            className={'d-flex justify-content-center'}>{props.user.username}
          </Card.Title>


        </Card.Body>
        <ListGroup className="list-group-flush">

          <ListGroupItem>
            <i className="bi bi-person"/> {props.user.firstName + ' ' + props.user.lastName}
          </ListGroupItem>

          <ListGroupItem>
            <i className="bi bi-envelope"/> {props.user.email}
          </ListGroupItem>
          {props.user.isVerified && <ListGroupItem>
            <i className="bi bi-envelope"/> Verified User
          </ListGroupItem>}

        </ListGroup>
        {props.user.isVerified || <Button onClick={props.onVerifyUser} className="">Verify</Button>}

      </Card>
    </div>
  );
}

export default UserCard;
