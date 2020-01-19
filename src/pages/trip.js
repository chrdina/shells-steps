import React from 'react';

function Trip(props) {

  const { params } = props.match;

  console.log("Trip Props: ");
  console.log(props.location.data);

  const data = props.location.data;
  const propsList = Object.entries(data).map(([key,value]) => {
    return (
      <p>{key}: {value.toString()}</p>
    )
  });

  // const tripDataMapped = Object.entries(params)
  return (
    <React.Fragment>
      <h1>Trip ID is: {params.id}</h1>
      <div class="trip-hero-img">
        <img src={data.tilePicTrip.fields.file.url} />
      </div>
      {propsList}
    </React.Fragment>
  );

}

export default Trip;
