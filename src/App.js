import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";
import Index from './pages/index';
import Countries from './pages/countries.js';
import Trips from './pages/trips';
import Trip from './pages/trip';
import Country from './pages/country';

function App() {
  return (
    <>
      <Router>
        <ul class='nav'>
          <li>
            <NavLink to="/index" activeClassName="nav-active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/trips" activeClassName="nav-active">Trips</NavLink>
          </li>
          <li>
            <NavLink to="/countries" activeClassName="nav-active">Countries</NavLink>
          </li>
          <li>
            <NavLink to="/suggestions" activeClassName="nav-active">Suggestions</NavLink>
          </li>
          <li>
            <NavLink to="/map" activeClassName="nav-active">Map</NavLink>
          </li>
        </ul>

        <Switch>
          <Route path="/index" exact component={Index} />
          <Route path="/trips/" component={Trips} />
          <Route path="/trip/:id" component={Trip} />
          <Route path="/countries/" component={Countries} />
          <Route path="/country/:id" component={Country} />
        </Switch>

      </Router>

      <div class="footer"> </div>
    </>
  );
}

export default App;
