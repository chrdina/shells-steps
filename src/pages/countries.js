import React from 'react';
import Tile from '../components/tile';
import client from '../contentfulProvider';

class Countries extends React.Component {
  state = { data: [] };

  componentDidMount() {
    client.getEntries({content_type: 'country', order: 'fields.countryName'}).then(response =>
      this.setState({data: response.items})
    )
  }

  render() {

    return (
      <div className="content-container">
        <div className="page-header">
          <h1>Countries</h1>
        </div>
        <div className='tiles'>
          {this.state.data.length && this.state.data.map(
            (country) => console.info('country', country) ||
              <Tile
                key={country.sys.id}
                id={country.sys.id}
                to={`/countries/${country.sys.id}`}
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
