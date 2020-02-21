import React, { useEffect, useState } from 'react';
import client from '../contentfulProvider';
import ReactMarkdown from 'react-markdown';
import Tile from '../components/tile';

function Country(props) {

  // this is just a way of getting state inside functions which... don't have state (does not work on classes)
  const [isLoading, setIsLoading] = useState(true);
  const [countryDetails, setCountryDetails] = useState({});

  console.log("Country Props: ");
  console.log(props.location);

  // Think of this as kind of a component did mount...
  useEffect(() => {
    const handleDataFetch = async () => {
      const pageId = props.location.pathname.split('/')[2];
      // await pattern is the same as using then(), just makes it more streamline
      const response = await client.getEntry(pageId); // wait for this to resolve, returns response.
      setCountryDetails(response);
      setIsLoading(false)
    }

    if (props.location.data) {
      setCountryDetails(props.location.data);
      setIsLoading(false);
    } else {
      handleDataFetch();
    }

  }, [props.location]);

  // Haven't got the data yet, so hang tight
  if (isLoading) {
    return <>Loading...</>
  }

  // Get all trips in this country
  const tripsInCountry = countryDetails.fields.tripsInThisCountry;

  // Generate trip tiles and store in variable
  const tripTiles = tripsInCountry.length ? tripsInCountry.map(
    (trip) => console.info('trip', trip) ||
      <Tile key={trip.sys.id}
        to={`/trips/${trip.sys.id}`}
        text={trip.fields.tripName}
        imgSrc={(trip.fields.tilePicTrip && trip.fields.tilePicTrip.fields != null) ? trip.fields.tilePicTrip.fields.file.url : undefined}
        data={trip}
      />
  ): <>Loading...</>

  return (
    <>
      <div className="header">{countryDetails.fields.countryName} <hr /></div>
      <div className="hero-containter">
        <div className="hero-text">
          <h2><ReactMarkdown>{countryDetails.fields.countryName}</ReactMarkdown></h2>
          <div className="long-list">
            <ReactMarkdown>{countryDetails.fields.countryLocations}</ReactMarkdown>
          </div>
        </div>
        {countryDetails.fields.tilePicCountry && <div className="hero-image" style={{backgroundImage: `url(${countryDetails.fields.tilePicCountry.fields.file.url}?fm=jpg&fl=progressive)`}}>
        </div>}
      </div>
      <div className="content">
        <ReactMarkdown>{countryDetails.fields.countryHighlights}</ReactMarkdown>
        <ReactMarkdown>{countryDetails.fields.countryTips}</ReactMarkdown>
      </div>
      <hr />
      <div className="content">
        <h2> Trips in {countryDetails.fields.countryName} </h2>
        <div className="tiles">
          {tripTiles}
        </div>
      </div>
    </>
  );

}

export default Country;
