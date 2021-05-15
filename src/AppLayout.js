import React, { useState } from 'react';
import Header from './components/header/Header';
import PropTypes from 'prop-types';
import Sidenav from './components/sidenav/Sidenav';
import Home from './components/home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Search from './components/sidenav/search/Search';
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
          <div
            style={{
              marginLeft: showSidenav ? '300px' : '40px',
              position: 'absolute'
            }}>
            <Switch>
              <Route path="/"
                exact>
                <Home showSidenav={showSidenav} />
              </Route>
              <Route path="/search">
                <Search/>
              </Route>
              <Route path="*">
                  <Redirect to="/"/>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>

  );
}
AppLayout.propTypes = {
  children: PropTypes.func
};
export default AppLayout;
