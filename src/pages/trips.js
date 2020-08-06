import React from "react";
import Tile from "../components/tile";
import client from "../contentfulProvider";
import AnchorNav from "../components/anchorNav";
import { HashLink as Link } from "react-router-hash-link";
import TileSelector from "../components/TileSelector";

class Trips extends React.Component {
  constructor(props) {
    super(props);
    this.handleDateSelect = this.handleDateSelect.bind(this);
    this.state = {
      data: [],
      selectedYear: "",
      filterActive: false,
    };
  }

  componentDidMount() {
    client
      .getEntries({ content_type: "Trip", order: "-fields.tripDate" })
      .then((response) => this.setState({ data: response.items }));
  }

  handleDateSelect(year) {
    //  If the selected year is already selected, deselect and disable filter
    if (year === this.state.selectedYear) {
      this.setState({ selectedYear: "" });
      this.setState({ filterActive: false });
    } else {
      this.setState({ selectedYear: year });
      this.setState({ filterActive: true });
    }
  }

  render() {
    const selectedYear = this.state.selectedYear;
    const filterActive = this.state.filterActive;

    const tileData = this.state.data.map(
      (trip) =>
        trip && {
          key: trip.sys.id,
          id: trip.sys.id,
          linkTo: `/trips/${trip.sys.id}`,
          text: trip.fields.tripName,
          imageURL: trip.fields.tilePicTrip.fields.file.url,
          filteredOut:
            filterActive && selectedYear !== trip.fields.tripDate.split("-")[0],
        }
    );

    return (
      <>
        {this.state.data && (
          <AnchorNav
            data={this.state.data}
            selectedYear={selectedYear}
            onDateSelect={this.handleDateSelect}
          />
        )}

        <div className="content-container">
          <div className="page-header">
            <h1>Trips</h1>
          </div>

          <TileSelector items={tileData} />
        </div>

        <div id="footer">
          <Link smooth to="#top">
            Back to top
          </Link>
        </div>
      </>
    );
  }
}
export default Trips;
