import React from 'react';
import Tile from '../components/tile';

function Trips(props) {
  return (
    <div>
      <h1>Trips</h1>
      <Tile type='trip' text='Trip to America' />
      <Tile type='trip' text='Trip to Europe' />
    </div>
  );
}

export default Trips
