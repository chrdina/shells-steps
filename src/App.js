import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Index from './pages/index'
import Countries from './pages/countries.js';
import Trips from './pages/trips';
import Trip from './components/trip';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/trips">Trips</Link>
            </li>
            <li>
              <Link to="/countries">Countries</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/trips/" component={Trips} />
          <Route path="/countries/" component={Countries} />
          <Route path="/trip/:id" component={Trip} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
