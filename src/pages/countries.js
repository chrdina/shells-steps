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
            (country) => <Tile type='country' key={country.countryName} text={country.countryName} data={country}/>
          )}
        </ol>
      </div>
    );
  }

}
export default Countries;
