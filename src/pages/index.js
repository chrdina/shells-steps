import React from 'react';
import client from '../contentfulProvider';

class Index extends React.Component {

  state = { data: "" };
  heroImageURL = "";

  componentDidMount() {
    client.getAsset('1nCcWOdKT2Rth4PQFL2d4m').then(asset =>
      this.setState({data: asset.fields.file.url})
    )
  }

  render () {

    if (this.state.data) {
      console.log(this.state.data);
      this.heroImageURL = this.state.data;
    }

    return (
      <>
        
        <div class="hero-image-main" style={{backgroundImage: `url(${this.heroImageURL})`}}>

        </div>
      </>
    );
  }
}

export default Index;
