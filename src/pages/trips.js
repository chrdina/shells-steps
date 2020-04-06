import React from 'react';
import Tile from '../components/tile';
import client from '../contentfulProvider';
import AnchorNav from '../components/anchorNav';
import { HashLink as Link } from "react-router-hash-link";

class Trips extends React.Component {
  state = {
    data: [],
    selectedYear: [],
    filterActive: false
  };

  componentDidMount() {
    client.getEntries({content_type: 'Trip', order: '-fields.tripDate'}).then(response =>
      this.setState({data: response.items})
    )
  }

  handleClick = (e) => {
    console.log("Date was clicked");
    this.setState({ filterActive: true })
  }

  updateSelectedTrips(date) {
    console.log("Getting trips for " + date);
    const tripsForDate = this.state.data.filter(trip => trip.fields.tripDate.split('-')[0] == date);
    console.log(tripsForDate);
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
        <a onClick={this.handleClick} value="2016">test date </a>
        {this.state.data && <AnchorNav data={this.getAnchorData()}/>}

        <div className="content-container">
          <div className="page-header">
            <h1>Trips</h1>
          </div>
          <div className='tiles'>
            {this.state.data && this.state.data.map(
              (trip) =>
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
