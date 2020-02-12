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
      <div class="header">{tripDetails.fields.tripName} <hr /></div>

      <div class="hero-area">
        <div class="hero-area-text">
          <ReactMarkdown>{tripDetails.fields.tripName}</ReactMarkdown>
          <ReactMarkdown>{tripDetails.fields.tripDate}</ReactMarkdown>
          <ReactMarkdown>{tripDetails.fields.tripLocations}</ReactMarkdown>
        </div>

        {tripDetails.fields.tilePicTrip && <div class="hero-area-img">
          <img src={`${tripDetails.fields.tilePicTrip.fields.file.url}?fm=jpg&fl=progressive`} alt="" />
        </div>}
      </div>

      <div class="content-grid">
        <div class="col">
          <ReactMarkdown>{tripDetails.fields.highlights}</ReactMarkdown>
          <ReactMarkdown>{tripDetails.fields.tripItinirary}</ReactMarkdown>
          <ReactMarkdown>{tripDetails.fields.tripDetails}</ReactMarkdown>
        </div>
        <div class="col">
          <Carousel arrows infinite>
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
