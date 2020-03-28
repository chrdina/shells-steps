import React from 'react';
import Tile from '../components/tile';
import client from '../contentfulProvider';
import AnchorNav from '../components/anchorNav';

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
    console.log("Anchor Data:");
    console.log(this.state.data);
    return this.state.data.length && this.state.data.map((trip) =>
      ({
        id: trip.sys.id,
        date: trip.fields.tripDate.split("-")[0]
      })
    )
  }


  render () {


    return (
      <>
        <AnchorNav data={this.getAnchorData()}/>

        <div className="content-container">
          <div className="page-header">
            <h1>TRIPS</h1>
          </div>
          <div className='tiles'>
            {this.state.data.length ? this.state.data.map(
              (trip) => console.info('trip', trip) ||
                <Tile
                  key={trip.sys.id}
                  id={trip.sys.id}
                  to={`/trips/${trip.sys.id}`}
                  text={trip.fields.tripName}
                  imgSrc={(trip.fields.tilePicTrip && trip.fields.tilePicTrip.fields != null) ? trip.fields.tilePicTrip.fields.file.url : undefined}
                  filteredOut={false}
                />

            ):
              <>Loading...</>}
          </div>
        </div>

        <div id="footer"><a href="#">Back to top</a></div>
      </>
    );
  }

}
export default Trips;
