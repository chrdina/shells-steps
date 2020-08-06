import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import client from "../contentfulProvider";
import ReactMarkdown from "react-markdown";
import Tile from "../components/tile";
import TileSelector from "../components/TileSelector";

function Country(props) {
  // this is just a way of getting state inside functions which... don't have state (does not work on classes)
  const [isLoading, setIsLoading] = useState(true);
  const [countryDetails, setCountryDetails] = useState({});

  console.log("Country Props: ");
  console.log(props.location);

  // Think of this as kind of a component did mount...
  useEffect(() => {
    const handleDataFetch = async () => {
      const pageId = props.location.pathname.split("/")[2];
      // await pattern is the same as using then(), just makes it more streamline
      const response = await client.getEntry(pageId); // wait for this to resolve, returns response.
      setCountryDetails(response);
      setIsLoading(false);
    };

    if (props.location.data) {
      setCountryDetails(props.location.data);
      setIsLoading(false);
    } else {
      handleDataFetch();
    }
  }, [props.location]);

  // Haven't got the data yet, so hang tight
  if (isLoading) {
    return <></>;
  }

  // Get all trips in this country
  const tripsInCountry = countryDetails.fields.tripsInThisCountry;

  // Generate trip tiles and store in variable
  const tileData = tripsInCountry.length ? (
    tripsInCountry.map(
      (trip) =>
        trip && {
          key: trip.sys.id,
          id: trip.sys.id,
          linkTo: `/trips/${trip.sys.id}`,
          text: trip.fields.tripName,
          imageURL: trip.fields.tilePicTrip.fields.file.url,
        }
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
            backgroundImage: `url(${countryDetails.fields.tilePicCountry.fields.file.url}?fm=jpg&fl=progressive)`,
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
          <ReactMarkdown>{countryDetails.fields.countryTips}</ReactMarkdown>
        </div>
        <div className="content-section">
          <ReactMarkdown>
            {countryDetails.fields.countryLocations}
          </ReactMarkdown>
        </div>

        <div className="content-section">
          <h2> Trips in {countryDetails.fields.countryName} </h2>
        </div>
        <TileSelector items={tileData} />
      </div>
      <div id="footer">
        <Link to="/countries">Back to Countries</Link>
      </div>
    </>
  );
}

export default Country;
