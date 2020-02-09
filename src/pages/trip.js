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
      <h1>{params.id}</h1>

        <Carousel arrows infinite centered>
          {data.tripPhotos && data.tripPhotos.map(
            (image, key) => <img src={`${image.fields.file.url}?fm=jpg&fl=progressive&h=500&w=700`} key={key} />
          )}
        </Carousel>



      <ReactMarkdown>{data.tripName}</ReactMarkdown>
      <ReactMarkdown>{data.tripDate}</ReactMarkdown>
      <ReactMarkdown>{data.tripLocations}</ReactMarkdown>
      <ReactMarkdown>{data.highlights}</ReactMarkdown>
      <ReactMarkdown>{data.tripItinirary}</ReactMarkdown>
      <ReactMarkdown>{data.tripDetails}</ReactMarkdown>
    </>
  );

}

export default Trip;
