import {useSelector} from 'react-redux';
import {Route, Switch} from 'react-router-dom';

import LoginUser from './components/login/login';
import LogoutUser from './components/logout';
import RegisterUser from './components/registration/registerUser';
import UserProfile from './components/userProfile/profile';
import VerifyEmail from './components/userProfile/verifyEmail/verifyEmail';
import {isUserLoggedInSelector} from './selector';

function UserRoutes() {

  const isUserLoggedIn = useSelector(isUserLoggedInSelector);

  return (
    <>
      {
        isUserLoggedIn ? <Switch>
          <Route path="/users/verify" component={VerifyEmail}/>
          <Route path="/users/logout" component={LogoutUser}/>
          <Route path="/users/profile" component={UserProfile}/>
          <Route path="/users/*" component={UserProfile}/>
        </Switch> : <Switch>
          <Route path="/users/register" component={RegisterUser}/>
          <Route path="/users/*" component={LoginUser}/>
        </Switch>
      }
    </>
  );
}

export default UserRoutes;
