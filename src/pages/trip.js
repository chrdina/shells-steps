import React, { useEffect, useState } from 'react';
import client from '../contentfulProvider';
import ReactMarkdown from 'react-markdown';

function Trip(props) {
  // this is just a way of getting state inside functions which... don't have state (does not work on classes)
  const [isLoading, setIsLoading] = useState(true);
  const [tripDetails, setTripDetails] = useState({});

  console.log("Trip Props: ");
  console.log(props.location);

  // Think of this as kind of a component did mount...
  useEffect(() => {
    const handleDataFetch = async () => {
      const pageId = props.location.pathname.split('/')[2];
      // await pattern is the same as using then(), just makes it more streamline
      const response = await client.getEntry(pageId); // wait for this to resolve, returns response.
      setTripDetails(response);
      setIsLoading(false)
    }

    if (props.location.data) {
      setTripDetails(props.location.data);
      setIsLoading(false);
    } else {
      handleDataFetch();
    }

  }, [props.location]);

  // Haven't got the data yet, so hang tight
  if (isLoading) {
    return <>"Loading..."</>
  }

  return (
    <>
      <h1>{tripDetails.fields.tripName}</h1>
      {tripDetails.fields.tilePicTrip && <div class="trip-hero-img">
        <img src={tripDetails.fields.tilePicTrip.fields.file.url} alt="" />
      </div>}
      <ReactMarkdown>{tripDetails.fields.tripName}</ReactMarkdown>
      <ReactMarkdown>{tripDetails.fields.tripDate}</ReactMarkdown>
      <ReactMarkdown>{tripDetails.fields.tripLocations}</ReactMarkdown>
      <ReactMarkdown>{tripDetails.fields.highlights}</ReactMarkdown>
      <ReactMarkdown>{tripDetails.fields.tripItinirary}</ReactMarkdown>
      <ReactMarkdown>{tripDetails.fields.tripDetails}</ReactMarkdown>
    </>
  );

}

export default Trip;
