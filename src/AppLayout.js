import React, { useState } from 'react';
import Header from './components/header/Header';
import PropTypes from 'prop-types';
import Sidenav from './components/sidenav/Sidenav';
import Home from './components/home/Home';
import { Container } from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
function AppLayout ({ children }) {
  const [showSidenav, toggleSidenav] = useState(false);
  const handleSidenavToggle = () => toggleSidenav(state => !state);

  return (
    <Router>
      <div className="App">
        <Header handleSidenavToggle={handleSidenavToggle}/>
        <div className="app__container">
          <Sidenav showSidenav={showSidenav}
            handleSidenavToggle={handleSidenavToggle}/>
          <Container fluid
            className="app__main">
            <Switch>
              <Route path="/"
                exact>
                <Home/>
              </Route>
              <Route path="/search">
                Search page
              </Route>
              <Route path="*">
                  <Redirect to="/"/>
              </Route>
            </Switch>
          </Container>
        </div>
      </div>
    </Router>

  );
}
AppLayout.propTypes = {
  children: PropTypes.func
};
export default AppLayout;
