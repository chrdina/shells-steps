import React, { useEffect, useState } from "react";
import Tile from "../components/tile";
import client from "../contentfulProvider";

const Countries = () => {

  const [data, setData] = useState();

  useEffect(() => {
    const handleDataFetch = async () => {
      const response = await client.getEntries({ content_type: "country", order: "fields.countryName" })
      setData(response.items);
    }
    if (data == null) {
      handleDataFetch();
    }
  }, []);

  return (
    <div className="content-container">
      <div className="page-header">
        <h1>Countries</h1>
      </div>
      <div className="tiles">
        {data &&
          data.map((country) => (
            <Tile
              key={country.sys.id}
              id={country.sys.id}
              to={`/countries/${country.sys.id}`}
              text={country.fields.countryName}
              imgSrc={
                country.fields.tilePicCountry &&
                country.fields.tilePicCountry.fields != null
                  ? country.fields.tilePicCountry.fields.file.url
                  : undefined
              }
              data={country}
            />
          ))}
      </div>
    </div>
  );
}
export default Countries;
