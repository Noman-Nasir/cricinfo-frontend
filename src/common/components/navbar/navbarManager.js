import {NavDropdown} from 'react-bootstrap';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

import {isUserLoggedInSelector, userSelector} from 'src/users/selector';

import CrincinfoNavbar from './crincinfoNavbar';

function NavbarManager() {

  const isUserLoggedIn = useSelector(isUserLoggedInSelector);
  const user = useSelector(userSelector);
  const history = useHistory();

  let loggedInDropdownLinks = <NavDropdown title="Manage Account" id="navbarScrollingDropdown">
    <NavDropdown.Item onClick={() => history.push('/users/profile')}>
      User Profile
    </NavDropdown.Item>
    <NavDropdown.Divider/>
    <NavDropdown.Item onClick={() => history.push('/users/logout')}>
      Logout
    </NavDropdown.Item>
  </NavDropdown>;

  let loggedOutDropdownLinks = <NavDropdown title="Guest User" id="navbarScrollingDropdown">
    <NavDropdown.Item onClick={() => history.push('/users/login')}>
      Log In
    </NavDropdown.Item>
    <NavDropdown.Item onClick={() => history.push('/users/register')}>
      Register
    </NavDropdown.Item>
  </NavDropdown>;

  return <CrincinfoNavbar isUserLoggedIn={isUserLoggedIn}
                          loggedInDropdownLinks={loggedInDropdownLinks}
                          loggedOutDropdownLinks={loggedOutDropdownLinks}
                          user={user}/>;
}

export default NavbarManager;
