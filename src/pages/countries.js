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

  render () {

    var countries = [];

    if (this.state.data.length) {
      console.log(this.state.data);
      countries = this.state.data.map((country) => country.fields);
      console.log(countries);
    }

    return (
      <div>
        <h1>Countries</h1>
        <div class='tiles'>
          {countries != null && countries.map(
            (country) => <Tile key={country.countryName}
                          type='country'
                          text={country.countryName}
                          imgSrc={(country.tilePicCountry != null && country.tilePicCountry.fields != null) ? country.tilePicCountry.fields.file.url : undefined}
                          data={country}/>
          )}
        </div>
      </div>
    );
  }

}
export default Countries;
