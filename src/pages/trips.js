import React from 'react';
import Tile from '../components/tile';
import client from '../contentfulProvider';
import Trip from './trip';

class Trips extends React.Component {
  state = { data: [] };

  componentDidMount() {
    client.getEntries({content_type: 'Trip', order: '-fields.tripDate'}).then(response =>
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
        <div class='tiles'>
          {trips != null && trips.map(
            (trip) =>
            <Tile key={trip.tripName}
              type='trip'
              text={trip.tripName}
              imgSrc={(trip.tilePicTrip != null && trip.tilePicTrip.fields != null) ? trip.tilePicTrip.fields.file.url : undefined}
              data={trip}
            />
          )}
        </div>
      </div>
    );
  }

}
export default Trips;
