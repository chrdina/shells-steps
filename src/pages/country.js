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

  const tripsInCountry = countryDetails.fields.tripsInThisCountry;

  const tripTiles = tripsInCountry.length ? (
    tripsInCountry.map(
      (trip) =>
        console.info("trip", trip) || (
          <Tile
            key={trip.sys.id}
            to={`/trips/${trip.sys.id}`}
            text={trip.fields.tripName}
            imgSrc={
              trip.fields.tilePicTrip && trip.fields.tilePicTrip.fields != null
                ? trip.fields.tilePicTrip.fields.file.url
                : undefined
            }
          />
        ),
    )
  ) : (
    <></>
  );

  return (
    <>
      {countryDetails.fields.tilePicCountry && (
        <div
          className="country-hero"
          style={{
            backgroundImage: `url(${countryDetails.fields.tilePicCountry.fields.file.url}?fm=jpg&fl=progressive&w=1600)`,
          }}
        >
          <div className="country-hero-text">
            {countryDetails.fields.countryName}
          </div>
        </div>
      )}

      <div className="content-container">
        <div className="content-section">
          <ReactMarkdown>
            {countryDetails.fields.countryHighlights}
          </ReactMarkdown>
        </div>
        <div className="content-section">
          <ReactMarkdown>{countryDetails.fields.countryTips}</ReactMarkdown>
        </div>
        <div className="content-section">
          <ReactMarkdown>
            {countryDetails.fields.countryLocations}
          </ReactMarkdown>
        </div>

        <div className="content-section">
          <h2> Trips in {countryDetails.fields.countryName} </h2>
          <div className="tiles">{tripTiles}</div>
        </div>
      </div>
      {/* <div id="footer">
        <Link to="/countries">Back to Countries</Link>
      </div> */}
    </>
  );
}

export default Country;
