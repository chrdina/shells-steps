import React from 'react';
import Tile from '../components/tile';
import client from '../contentfulProvider';

class Trips extends React.Component {
  state = {
    data: [],
    yearSelected: ""
  };

  componentDidMount() {
    client.getEntries({content_type: 'Trip', order: '-fields.tripDate'}).then(response =>
      this.setState({data: response.items})
    )
  }


  render () {

    const testSelectedYear = false;

    return (
      <div className="content-container">
        <h1>Trips</h1>
        <div className='tiles'>
          {this.state.data.length ? this.state.data.map(
            (trip) => console.info('trip', trip) ||
              <a name={trip.fields.tripName}>
                <Tile key={trip.sys.id}
                  to={`/trips/${trip.sys.id}`}
                  text={trip.fields.tripName}
                  imgSrc={(trip.fields.tilePicTrip && trip.fields.tilePicTrip.fields != null) ? trip.fields.tilePicTrip.fields.file.url : undefined}

                  filteredOut={testSelectedYear && (testSelectedYear != trip.fields.tripDate.split("-")[0])}
                />
              </a>
          ):
            <>Loading...</>}
        </div>
      </div>
    );
  }

}
export default Trips;
