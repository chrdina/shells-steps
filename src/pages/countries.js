import React from 'react';
import Tile from '../components/tile';
import client from '../contentfulProvider';
import Country from './country';

// console.log(countriesArray);

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
      countries = this.state.data.fields;
    }

    return (
      <div>
        <h1>Countries</h1>

        <ol>

        </ol>
      </div>
    );
  }

}
export default Countries;
