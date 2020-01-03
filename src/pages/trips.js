import React from 'react';
import Tile from '../components/tile';
import client from '../contentfulProvider';
import Trip from './trip';

class Trips extends React.Component {
  state = { data: [] };

  componentDidMount() {
    client.getEntries({content_type: 'Trip'}).then(response =>
      this.setState({data: response.items})
    )
  }

  render () {

    var trips = [];

    if (this.state.data.length) {
      trips = this.state.data.map((trip, key) => trip.fields);
      console.log(trips);
    }

    return (
      <div>
        <h1>Trips</h1>
        <ol>
          {trips != null && trips.map(
            (trip) => <Tile key={trip.tripName} type='trip' text={trip.tripName} data={trip}/>
          )}
        </ol>
      </div>
    );
  }

}
export default Trips;
