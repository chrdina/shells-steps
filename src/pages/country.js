import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import client from "../contentfulProvider";
import ReactMarkdown from "react-markdown";
import Tile from "../components/tile";

function Country() {
  const [isLoading, setIsLoading] = useState(true);
  const [countryDetails, setCountryDetails] = useState({});

  const urlParams = useParams();

  const handleDataFetch = async () => {
    const pageId = urlParams.id;

    const response = await client.getEntry(pageId);
    setCountryDetails(response);
    setIsLoading(false);
  };

  useEffect(() => {
    handleDataFetch();
  }, [urlParams.id]);

  if (isLoading) {
    return <></>;
  }

  const {
    tilePicCountry,
    tripsInThisCountry: trips,
    countryName,
    countryHighlights: highlights,
    countryTips: tips,
    countryLocations: locations,
  } = countryDetails.fields;

  const tripTiles = trips?.length ? (
    trips.map(({ sys: { id }, fields: { tilePicTrip, tripName } }) => (
      <Tile
        key={id}
        to={`/trips/${id}`}
        text={tripName}
        imgSrc={
          tilePicTrip && tilePicTrip.fields != null
            ? tilePicTrip.fields.file.url
            : undefined
        }
      />
    ))
  ) : (
    <></>
  );

  return (
    <>
      <div
        className="country-hero"
        style={{
          backgroundImage: tilePicCountry
            ? `url(${tilePicCountry.fields.file.url}?fm=jpg&fl=progressive&w=1600)`
            : undefined,
        }}
      >
        <div className="country-hero-text">{countryName}</div>
      </div>

      <div className="content-container">
        {highlights && (
          <div className="content-section">
            <h2>Highlights</h2>
            <ReactMarkdown>{highlights}</ReactMarkdown>
          </div>
        )}

        {tips && (
          <div className="content-section">
            <h2>Tips</h2>
            <ReactMarkdown>{tips}</ReactMarkdown>
          </div>
        )}

        {locations && (
          <div className="content-section">
            <h2>Places Visited</h2>
            <ReactMarkdown>{locations}</ReactMarkdown>
          </div>
        )}

        {tripTiles?.length && (
          <div>
            <h2> Trips in {countryName} </h2>
            <div className="tiles">{tripTiles}</div>
          </div>
        )}
      </div>
    </>
  );
}

export default Country;
