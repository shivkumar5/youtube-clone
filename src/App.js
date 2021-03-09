import React from 'react';
import { Container } from 'react-bootstrap';
import './App.scss';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Sidenav from './components/sidenav/Sidenav';

function App () {
  return (
    <div className="App">
        <Header/>
        <div className="app__container">
          <Sidenav/>
          <Container fluid
            className="app__main">
            <Home/>
          </Container>
        </div>
    </div>
  );
}

export default App;
