import React from 'react';
import Tile from '../components/tile';
import client from '../contentfulProvider';
import Country from './country';

class Countries extends React.Component {
  state = { data: [] };

  componentDidMount() {
    client.getEntries({content_type: 'country'}).then(response =>
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
        <ol>
          {countries != null && countries.map(
            (country) => <Tile key={country.countryName} type='country' text={country.countryName} imageSrc={(country.tilePicCountry != null && country.tilePicCountry.fields != null) && country.tilePicCountry.fields.file.url} data={country}/>
          )}
        </ol>
      </div>
    );
  }

}
export default Countries;
