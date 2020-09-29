import React, {useEffect, useState} from "react";
import client from "../contentfulProvider";
import { Link } from "react-router-dom";

const Index = (props) => {

const [data, setData] = useState(null);

useEffect(() => {
  const handleDataFetch = async () => {
    const response = await client.getAsset("71TyxViSSevOn2SFzybHtE");
    setData(response.fields.file.url);
  }
  if (data == null) {
    handleDataFetch();
  }
  
}, []);

  return (
    <>
        <div
          className="hero-image-main"
          style={{ backgroundImage: `url(${data}?fm=jpg&fl=progressive&q=50)` }}
        >
          <div className="title-area">
            <h1>Shell's Steps</h1>
            <p>My travel tales from around the world.</p>
            <Link to="/trips/">
              <button aria-label="View my trips" className="title-cta">
                View my trips
              </button>
            </Link>
          </div>
        </div>
      </>
  );
}

export default Index;

// class Index extends React.Component {
//   state = { data: "" };

//   componentDidMount() {
//     client.getAsset("71TyxViSSevOn2SFzybHtE").then((asset) =>
//       this.setState({
//         data: `${asset.fields.file.url}?fm=jpg&fl=progressive`,
//       })
//     );

//     // Tasmania BG
//     // client.getAsset("5cSBFkBEFUWmwsUsEWqg4K").then((asset) =>
//     //   this.setState({
//     //     data: `${asset.fields.file.url}?fm=jpg&fl=progressive&q=50`,
//     //   })
//     // );
//   }
// }


