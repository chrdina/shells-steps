import React from 'react';
import Tile from '../components/tile';

class Trips extends React.Component {
  render() {
    return (
      <div>
        <h1>Trips</h1>
        <Tile text='Trip to America' />
        <Tile text='Trip to Europe' />
      </div>
    );
  }
}

export default Trips
