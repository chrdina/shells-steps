import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Tile extends React.Component {
  render() {

    const tripUrl = '/trip/' + this.props.text;
    return (
      <div>
        <Link to={tripUrl}>
          <div>
            <h2>{this.props.text}</h2>
          </div>
        </Link>

      </div>
    );
  }
}

export default Tile;
