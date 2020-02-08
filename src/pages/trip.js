import React from 'react';
import ReactMarkdown from 'react-markdown';

function Trip(props) {

  const { params } = props.match;

  console.log("Trip Props: ");
  console.log(props.location.data);

  const data = props.location.data;

  return (
    <>
      <h1>{params.id}</h1>
      <div class="trip-hero-img">
        {data.tripPhotos && data.tripPhotos.map(
          (image) => <img src={`${image.fields.file.url}?fm=jpg&fl=progressive`} />
        )}
      </div>
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
