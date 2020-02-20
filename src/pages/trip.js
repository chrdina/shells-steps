import React, { useEffect, useState } from 'react';
import client from '../contentfulProvider';
import ReactMarkdown from 'react-markdown';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

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
    return <>Loading...</>
  }

  return (
    <>
      <div className="header">{tripDetails.fields.tripName} <hr /></div>

      <div className="hero-containter">
        <div className="hero-text">
          <ReactMarkdown>{tripDetails.fields.tripName}</ReactMarkdown>
          <ReactMarkdown>{tripDetails.fields.tripDate}</ReactMarkdown>
          <ReactMarkdown>{tripDetails.fields.tripLocations}</ReactMarkdown>
        </div>

        {tripDetails.fields.tilePicTrip && <div className="hero-image" style={{backgroundImage: `url(${tripDetails.fields.tilePicTrip.fields.file.url}?fm=jpg&fl=progressive)`}}>
        </div>}
      </div>

      <div className="content-grid">
        <div className="col-left">
          <ReactMarkdown>{tripDetails.fields.highlights}</ReactMarkdown>
          <ReactMarkdown>{tripDetails.fields.tripItinirary}</ReactMarkdown>
          <ReactMarkdown>{tripDetails.fields.tripDetails}</ReactMarkdown>
        </div>
        <div className="col-right">
          <Carousel arrows centered dots>
            {tripDetails.fields.tripPhotos && tripDetails.fields.tripPhotos.map(
              (image, key) => <img src={`${image.fields.file.url}?fm=jpg&fl=progressive&h=400&w=600`} key={key} />
            )}
          </Carousel>
        </div>
      </div>
    </>
  );

}

export default Trip;
