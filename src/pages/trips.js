import React from 'react';
import Tile from '../components/tile';
import client from '../contentfulProvider';
import AnchorNav from '../components/anchorNav';
import { HashLink as Link } from "react-router-hash-link";

class Trips extends React.Component {
  constructor(props) {
    super(props);
    this.handleDateSelect = this.handleDateSelect.bind(this);
    this.state = {
      data: [],
      selectedYear: "",
      filterActive: false
    };
  }


  componentDidMount() {
    client.getEntries({content_type: 'Trip', order: '-fields.tripDate'}).then(response =>
      this.setState({data: response.items})
    )
  }

  handleDateSelect(year) {
    console.log("Date was clicked");
    this.setState({selectedYear: year});
  }

  updateSelectedTrips(date) {
    console.log("Getting trips for " + date);
    const tripsForDate = this.state.data.filter(trip => trip.fields.tripDate.split('-')[0] == date);
    console.log(tripsForDate);
  }


  render () {

    const selectedYear = this.state.selectedYear;
    console.log("Selected Year: " + selectedYear);

    return (
      <>

          {this.state.data && <AnchorNav
            data={this.state.data}
            selectedYear={selectedYear}
            onDateSelect={this.handleDateSelect} /> }


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
