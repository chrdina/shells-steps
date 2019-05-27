import React from 'react';
import Tile from '../components/tile';

class Countries extends React.Component {
  render() {
    return (
      <div>
        <h1>Countries</h1>
        <Tile type='country' text='Test Country' />
      </div>
    );
  }
}

export default Countries;
