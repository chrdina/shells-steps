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


class App extends React.Component {

  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      menuActive: false,
    }
  }

  toggleMenu () {
    const currentState = this.state.menuActive;
    console.log("State was: " + currentState);
    this.setState({menuActive: !currentState});
    console.log("State changed to: " + this.state.menuActive);
  }

  render () {

    return (
      <>
        <Router basename='/'>
          <div id="top"></div>
          <div id="nav-top" >

            <Link to="/">
              <div id="logo">
                <FontAwesomeIcon icon="globe-americas" className="icon"/>

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

            <div className={`hamburger ${this.state.menuActive ? 'open' : null}`} onClick={this.toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>

            </div>

          </div>

          <div className={`collapsible-menu ${this.state.menuActive ? 'collapsible-menu-active' : null}` }>
            <ul>

              <NavLink to="/" exact={true} activeClassName="nav-active-collapsible" onClick={this.toggleMenu}>
                <li>Home</li>
              </NavLink>

              <NavLink to="/trips" activeClassName="nav-active-collapsible" onClick={this.toggleMenu}>
                <li>Trips</li>
              </NavLink>

              <NavLink to="/countries" activeClassName="nav-active-collapsible" onClick={this.toggleMenu}>
                <li>Countries</li>
              </NavLink>

              <NavLink to="/map" activeClassName="nav-active-collapsible" onClick={this.toggleMenu}>
                <li>Map</li>
              </NavLink>

            </ul>
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
}

export default App;
