import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Tile extends React.Component {
  render() {

    // set url based on the type of tile this is
    const tripUrl = `/${this.props.type}/${this.props.text}`;

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
