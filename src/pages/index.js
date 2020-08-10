import React from "react";
import client from "../contentfulProvider";
import { Link } from "react-router-dom";

class Index extends React.Component {
  state = { data: "" };

  componentDidMount() {
    client.getAsset("71TyxViSSevOn2SFzybHtE").then((asset) =>
      this.setState({
        data: `${asset.fields.file.url}?fm=jpg&fl=progressive`,
      })
    );

    // Tasmania BG
    // client.getAsset("5cSBFkBEFUWmwsUsEWqg4K").then((asset) =>
    //   this.setState({
    //     data: `${asset.fields.file.url}?fm=jpg&fl=progressive&q=50`,
    //   })
    // );
  }

  render() {
    return (
      <>
        <div
          className="hero-image-main"
          style={{ backgroundImage: `url(${this.state.data})` }}
        >
          <div className="title-area">
            <h1>Where's Shell?</h1>
            <p>My travel tales from around the world.</p>
            <Link to="/trips/">
              <button className="title-cta">View my trips</button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Index;
