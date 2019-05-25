import React from 'react';
import Tile from '../components/tile';

class Trips extends React.Component {
  render() {
    return (
      <div>
        <h1>Trips</h1>
        <Tile type='trip' text='Trip to America' />
        <Tile type='trip' text='Trip to Europe' />
      </div>
    );
  }
}

export default Trips
