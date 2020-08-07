import React, { useState, useEffect, useCallback } from "react";
import client from "../contentfulProvider";

function Test(props) {
  const [image, setImage] = useState();

  const fetchData = useCallback(() => {
    client
      .getAsset("56ZwjZ99qxyCtZUjV0QQxg")
      .then((asset) => setImage(asset.fields.file.url))
      .catch(console.error);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <img src={image + "?fm=jpg&fl=progressive"} height="900" />
    </div>
  );
}

export default Test;
