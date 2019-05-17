import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
  return <h2>Home</h2>;
}
function Trips() {
  return <h2>Trips</h2>;
}
function Countries({match:{params}}) {
  console.log(params);
  return <h2>Countries</h2>;
}

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

        <Route path="/" exact component={Index} />
        <Route path="/trips/" component={Trips} />
        <Route path="/countries/:id" component={Countries} />
      </div>
    </Router>
  );
}

export default App;
