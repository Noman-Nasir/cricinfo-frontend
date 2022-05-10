import {Container, Nav, Navbar} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

function CrincinfoNavbar(props) {

  let activeNavLinkStyle = props.activeNavLinkStyle || {
    fontWeight: 'bold',
    color: 'black',
  };

  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <img alt="" src="/logos/cricinfo-logos_transparent.png" width="100" height="50"
               className="d-inline-block align-top"/>
        </Navbar.Brand>

        <Nav className="me-auto">
          <NavLink to="/" exact activeStyle={activeNavLinkStyle}
                   className="nav-link">Home</NavLink>
          <NavLink to="/players" activeStyle={activeNavLinkStyle}
                   className="nav-link">Players</NavLink>
          <NavLink to="/matches" activeStyle={activeNavLinkStyle}
                   className="nav-link">Matches</NavLink>
          <NavLink to="/teams" activeStyle={activeNavLinkStyle}
                   className="nav-link">Teams</NavLink>
          <NavLink to="/series" activeStyle={activeNavLinkStyle}
                   className="nav-link">Series</NavLink>
          {
            props.user && props.user.isVerified &&
            <NavLink to="/stats" activeStyle={activeNavLinkStyle}
                     className="nav-link">Stats</NavLink>
          }
        </Nav>

        <Nav className="justify-content-end">
          {
            props.user && props.user.isSuperuser &&
            <NavLink to="/admin" activeStyle={activeNavLinkStyle} className="nav-link">
              Control Panel
            </NavLink>
          }
          {
            props.isUserLoggedIn ? props.loggedInDropdownLinks : props.loggedOutDropdownLinks
          }
        </Nav>
      </Container>
    </Navbar>

  );
}

export default CrincinfoNavbar;
