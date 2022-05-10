import {Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import {Calendar2Date, Geo, GraphUp} from 'react-bootstrap-icons';
import {
  BATTING_STYLE_CODE_TO_BATTING_STYLE,
  BOWLING_STYLE_CODE_TO_BOWLING_STYLE,
  ROLE_CODE_TO_ROLE,
} from '../../constants';

function PlayerCard(props) {

  return (
    <div className="d-flex justify-content-center my-5">

      <Card style={{width: '25rem'}} border={'medium'}>

        <Card.Img className="p-5" src={props.player.avatar}/>

        <Card.Body>
          <Card.Title
            className={'d-flex justify-content-center'}>{props.player.firstName + ' ' + props.player.lastName}</Card.Title>
          <Card.Text>
            {props.player.bio}
          </Card.Text>
        </Card.Body>

        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <Geo/> {props.player.address}
          </ListGroupItem>
          <ListGroupItem>
            <Calendar2Date/> {props.player.dateOfBirth}
          </ListGroupItem>
          <ListGroupItem>
            {BATTING_STYLE_CODE_TO_BATTING_STYLE[props.player.battingStyle]} Batter
          </ListGroupItem>
          <ListGroupItem>
            {BOWLING_STYLE_CODE_TO_BOWLING_STYLE[props.player.bowlingStyle]} Bowler
          </ListGroupItem>
          <ListGroupItem>
            <GraphUp/> {props.player.iccRanking}
          </ListGroupItem>
          <ListGroupItem>
            <Geo/> {ROLE_CODE_TO_ROLE[props.player.role]}
          </ListGroupItem>
        </ListGroup>

      </Card>
    </div>
  );
}

export default PlayerCard;
