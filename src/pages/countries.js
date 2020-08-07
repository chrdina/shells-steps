import React, { useState, useEffect } from "react";
import client from "../contentfulProvider";
import TileSelector from "../components/TileSelector";

function Countries(props) {
  const [countries, setCountries] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await client.getEntries({
        content_type: "country",
        order: "fields.countryName",
      });
      setCountries(response.items);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  // Data is still not loaded - do not return anything
  if (isLoading) return false;

  console.log(isLoading, countries);

  const tileData = countries.map(
    (country, key) =>
      country && {
        key: key,
        id: country.sys.id,
        linkTo: `/countries/${country.sys.id}`,
        imageURL: country.fields.tilePicCountry.fields.file.url,
        text: country.fields.countryName,
      }
  );

  // Return jsx using loaded data
  return (
    <div className="content-container">
      <div className="page-header">
        <h1>Countries</h1>
      </div>

      <TileSelector items={tileData} />
    </div>
  );
}

export default Countries;
