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
    if (year === this.state.selectedYear) {
      this.setState({selectedYear: ""});
      this.setState({filterActive: false});
    }
    else {
      this.setState({selectedYear: year});
      this.setState({filterActive: true});
    }
  }


  render () {

    const selectedYear = this.state.selectedYear;
    const filterActive = this.state.filterActive;

    return (
      <>

        {this.state.data &&
          <AnchorNav
            data={this.state.data}
            selectedYear={selectedYear}
            onDateSelect={this.handleDateSelect}
            />
        }

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
                  imgSrc={(trip.fields.tilePicTrip && trip.fields.tilePicTrip.fields !== null) ? trip.fields.tilePicTrip.fields.file.url : undefined}
                  filteredOut={filterActive && selectedYear !== trip.fields.tripDate.split('-')[0]}
                />
            )}
          </div>
        </div>

        <div id="footer"><Link smooth to="#top">Back to top</Link></div>
      </>
    );
  }

}
export default Trips;
