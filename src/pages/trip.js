import React from 'react';
import ReactMarkdown from 'react-markdown';

function Trip(props) {

  const { params } = props.match;

  console.log("Trip Props: ");
  console.log(props.location.data);

  const data = props.location.data;

  function markdown(input) {
    return (
      <ReactMarkdown>
        {input}
      </ReactMarkdown>
    )
  }

  function mapPropsToPara(data) {
    const propsList = Object.entries(data).map(([key,value]) => {
      return (
        <p>{key}: {value.toString()}</p>
      )
    });
    return propsList;
  }

  // const tripDataMapped = Object.entries(params)
  return (
    <div>
      <h1>{params.id}</h1>
      <div class="trip-hero-img">
        <img src={data.tilePicTrip.fields.file.url} />
      </div>
      {markdown(data.tripName)}
      {markdown(data.tripDate)}
      {markdown(data.tripLocations)}
      {markdown(data.highlights)}
      {markdown(data.tripItinirary)}
      {markdown(data.tripDetails)}
    </div>
  );

}

export default Trip;
