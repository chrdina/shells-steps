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
        name: trip.fields.tripName,
        date: trip.fields.tripDate.split("-")[0]
      })
    )
  }


  render () {

    const testSelectedYear = false;


    return (
      <>
        <AnchorNav data={this.getAnchorData()}/>
        <div className="content-container">
          <h1>Trips</h1>
          <a href="#Japan Winter Trip">Snap to Japan</a>
          <div className='tiles'>
            {this.state.data.length ? this.state.data.map(
              (trip) => console.info('trip', trip) ||
                <Tile key={trip.sys.id}
                  to={`/trips/${trip.sys.id}`}
                  text={trip.fields.tripName}
                  imgSrc={(trip.fields.tilePicTrip && trip.fields.tilePicTrip.fields != null) ? trip.fields.tilePicTrip.fields.file.url : undefined}

                  filteredOut={testSelectedYear && (testSelectedYear != trip.fields.tripDate.split("-")[0])}
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
