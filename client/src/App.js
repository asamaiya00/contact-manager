import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';

import ContactState from './context/contact/ContactState';
import './App.css';

function App() {
  return (
    <ContactState>
      <Router>
        <React.Fragment>
          <Navbar></Navbar>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </ContactState>
  );
}

export default App;
