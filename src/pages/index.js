import React, { useEffect, useState } from "react";
import client from "../contentfulProvider";
import { Link } from "react-router-dom";

const Index = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const handleDataFetch = async () => {
      const response = await client.getAsset("3VHvN2sI1r2yMOxDV6H4za");
      setData(response.fields.file.url);
    };
    if (data == null) {
      handleDataFetch();
    }
  }, []);

  return (
    <>
      <div
        className="hero-image-main"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
              url(${data}?fm=jpg&fl=progressive&w=1600)`,
        }}
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
};

export default Index;
