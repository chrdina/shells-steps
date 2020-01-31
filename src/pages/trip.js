import React from 'react';
import ReactMarkdown from 'react-markdown';

function Trip(props) {

  const { params } = props.match;

  console.log("Trip Props: ");
  console.log(props.location.data);

  const data = props.location.data;

  // Used only for debugging
  function mapPropsToPara(data) {
    const propsList = Object.entries(data).map(([key,value]) => {
      return (
        <p>{key}: {value.toString()}</p>
      )
    });
    return propsList;
  }

  return (
    <>
      <h1>{params.id}</h1>
      <div class="trip-hero-img">
        <img src={data.tilePicTrip.fields.file.url} />
      </div>
      <ReactMarkdown>{(data.tripName)}</ReactMarkdown>
      <ReactMarkdown>{(data.tripDate)}</ReactMarkdown>
      <ReactMarkdown>{(data.tripLocations)}</ReactMarkdown>
      <ReactMarkdown>{(data.highlights)}</ReactMarkdown>
      <ReactMarkdown>{(data.tripItinirary)}</ReactMarkdown>
      <ReactMarkdown>{(data.tripDetails)}</ReactMarkdown>
    </>
  );

}

export default Trip;
