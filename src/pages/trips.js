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

    return (
      <div>
        <h1>Trips</h1>
        <div class='tiles'>
          {this.state.data.length ? this.state.data.map(
            (trip) => console.info('trip', trip) ||
              <Tile key={trip.sys.id}
                to={`/trips/${trip.sys.id}`}
                text={trip.fields.tripName}
                imgSrc={(trip.fields.tilePicTrip && trip.fields.tilePicTrip.fields != null) ? trip.fields.tilePicTrip.fields.file.url : undefined}
                data={trip}
              />
          ):
            <>Loading...</>}
        </div>
      </div>
    );
  }

}
export default Trips;
