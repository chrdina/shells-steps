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
        <div className="hero-image-main" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(${this.state.data})`}}>
          <div className="title">SAM I AM</div>
        </div>
      </>
    );
  }
}

export default Index;
