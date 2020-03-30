import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";
import Index from './pages/index';
import Countries from './pages/countries.js';
import Trips from './pages/trips';
import Trip from './pages/trip';
import Country from './pages/country';
import Map from './pages/map';

// Font awesome icon setup
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGlobeAmericas, faCoffee, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
library.add(faGlobeAmericas, faCoffee, faChevronLeft, faChevronRight);   // add icons to library


function App() {

  return (
    <>
      <Router basename='/'>
        <div className="nav">

          <Link to="/">
            <div id="logo">
              <FontAwesomeIcon icon="globe-americas" className="icon"/>Where's Shell
            </div>
          </Link>

          <div className="menu">

            <ul>
              <li>
                <NavLink to="/" exact={true} activeClassName="nav-active">Home</NavLink>
              </li>
              <li>
                <NavLink to="/trips" activeClassName="nav-active">Trips</NavLink>
              </li>
              <li>
                <NavLink to="/countries" activeClassName="nav-active">Countries</NavLink>
              </li>
              <li>
                <NavLink to="/map" activeClassName="nav-active">Map</NavLink>
              </li>
            </ul>

          </div>

        </div>

        <div className="container-main">
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/trips/" exact component={Trips} />
            <Route path="/trips/:id" component={Trip} />
            <Route path="/countries/" exact component={Countries} />
            <Route path="/countries/:id" component={Country} />
            <Route path="/map" component={Map} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
