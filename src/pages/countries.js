import React from "react";
import Tile from "../components/tile";
import client from "../contentfulProvider";
import TileSelector from "../components/TileSelector";

class Countries extends React.Component {
  state = { data: [] };

  componentDidMount() {
    client
      .getEntries({ content_type: "country", order: "fields.countryName" })
      .then((response) => this.setState({ data: response.items }));
  }

  render() {
    const tileData = this.state.data.map(
      (country) =>
        country && {
          key: country.sys.id,
          id: country.sys.id,
          linkTo: `/countries/${country.sys.id}`,
          text: country.fields.countryName,
          imageURL: country.fields.tilePicCountry.fields.file.url,
          filteredOut: false,
        }
    );

    return (
      <div className="content-container">
        <div className="page-header">
          <h1>Countries</h1>
        </div>

        {this.state.data && <TileSelector items={tileData} />}
      </div>
    );
  }
}
export default Countries;
