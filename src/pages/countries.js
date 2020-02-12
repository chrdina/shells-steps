import React from 'react';
import Tile from '../components/tile';
import client from '../contentfulProvider';
import Country from './country';

class Countries extends React.Component {
  state = { data: [] };

  componentDidMount() {
    client.getEntries({content_type: 'country', order: 'fields.countryName'}).then(response =>
      this.setState({data: response.items})
    )
  }

  render() {

    return (
      <div>
        <h1>Countries</h1>
        <div class='tiles'>
          {this.state.data.length && this.state.data.map(
            (country) => console.info('country', country) ||
              <Tile key={country.sys.id}
                to={`/country/${country.sys.id}`}
                text={country.fields.countryName}
                imgSrc={(country.fields.tilePicCountry && country.fields.tilePicCountry.fields != null) ? country.fields.tilePicCountry.fields.file.url : undefined}
                data={country}
              />
          )}
        </div>
      </div>
    );
  }

}
export default Countries;
