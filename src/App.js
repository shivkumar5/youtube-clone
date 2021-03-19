import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.scss';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Sidenav from './components/sidenav/Sidenav';

function App () {
  const [showSidenav, toggleSidenav] = useState(false);

  const handleSidenavToggle = () => toggleSidenav(state => !state);
  return (
    <div className="App">
        <Header handleSidenavToggle={handleSidenavToggle}/>
        <div className="app__container">
          <Sidenav showSidenav={showSidenav}
            handleSidenavToggle={handleSidenavToggle}/>
          <Container fluid
            className="app__main">
            <Home/>
          </Container>
        </div>
    </div>
  );
}

export default App;
