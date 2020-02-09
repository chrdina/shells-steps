import React from 'react';
import ReactMarkdown from 'react-markdown';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

function Trip(props) {

  const { params } = props.match;

  console.log("Trip Props: ");
  console.log(props.location.data);

  const data = props.location.data;

  return (
    <>
      <div class="hero-area">
        <div class="hero-area-text">
          <h2><ReactMarkdown>{data.tripName}</ReactMarkdown></h2>
          <ReactMarkdown>{data.tripDate}</ReactMarkdown>
          <ReactMarkdown>{data.tripLocations}</ReactMarkdown>
        </div>
        <div class="hero-area-img" style={{backgroundImage: `url(${data.tilePicTrip.fields.file.url}?fm=jpg&fl=progressive)`}}>
          
        </div>
      </div>

      <div class="content-grid">
        <div class="col">
          <ReactMarkdown>{data.highlights}</ReactMarkdown>
          <ReactMarkdown>{data.tripItinirary}</ReactMarkdown>
          <ReactMarkdown>{data.tripDetails}</ReactMarkdown>
        </div>
        <div class="col">
          <Carousel arrows infinite>
            {data.tripPhotos && data.tripPhotos.map(
              (image, key) => <img src={`${image.fields.file.url}?fm=jpg&fl=progressive&h=400&w=600`} key={key} />
            )}
          </Carousel>
        </div>
      </div>





    </>
  );

}

export default Trip;
