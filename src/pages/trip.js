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
      <div class="header">{params.id} <hr /></div>

      <div class="hero-area">
        <div class="hero-area-text">
          <ReactMarkdown>{data.tripName}</ReactMarkdown>
          <ReactMarkdown>{data.tripDate}</ReactMarkdown>
          <ReactMarkdown>{data.tripLocations}</ReactMarkdown>
        </div>
        <div class="hero-area-img">
          <img src={`${data.tilePicTrip.fields.file.url}?fm=jpg&fl=progressive`} />
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
