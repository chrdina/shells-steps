import React from 'react';
import Tile from '../components/tile';
import client from '../contentfulProvider';
import AnchorNav from '../components/anchorNav';
import { HashLink as Link } from "react-router-hash-link";

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

  getAnchorData() {
    return this.state.data.map((trip) =>
      ({
        id: trip.sys.id,
        date: trip.fields.tripDate.split("-")[0]
      })
    )
  }


  render () {


    return (
      <>
        {this.state.data && <AnchorNav data={this.getAnchorData()}/>}

        <div className="content-container">
          <div className="page-header">
            <h1>Trips</h1>
          </div>
          <div className='tiles'>
            {this.state.data && this.state.data.map(
              (trip) => console.info('trip', trip) ||
                <Tile
                  key={trip.sys.id}
                  id={trip.sys.id}
                  to={`/trips/${trip.sys.id}`}
                  text={trip.fields.tripName}
                  imgSrc={(trip.fields.tilePicTrip && trip.fields.tilePicTrip.fields != null) ? trip.fields.tilePicTrip.fields.file.url : undefined}
                  filteredOut={false}
                />
            )}
          </div>
        </div>

        <div id="footer"><Link smooth to="#">Back to top</Link></div>
      </>
    );
  }

}
export default Trips;
