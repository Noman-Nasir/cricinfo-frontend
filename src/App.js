import {Container} from 'react-bootstrap';
import {Provider} from 'react-redux';

import AppRoutes from './common/components/appRoutes';
import NavbarManager from './common/components/navbar/navbarManager';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <NavbarManager/>
      <Container>
        <AppRoutes/>
      </Container>
    </Provider>
  );
}

export default App;
