import React from 'react';
import client from '../contentfulProvider';

class Index extends React.Component {

  state = { data: "" };

  componentDidMount() {
    client.getAsset('5cSBFkBEFUWmwsUsEWqg4K').then((asset) =>
      this.setState({data: `${asset.fields.file.url}?fm=jpg&fl=progressive&q=50`})
    )
  }

  render () {

    return (
      <>
        <div className="hero-image-main" style={{backgroundImage: `url(${this.state.data})`}}>
          <div className="title">Where's Shell</div>
        </div>
      </>
    );
  }
}

export default Index;
