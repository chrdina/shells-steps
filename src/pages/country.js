import React from 'react';

function Country(props) {

  const { params } = props.match;
  const data = props.location.data;
  console.log("Country Data: ");
  console.log(data);

  return (
    <React.Fragment>
      <h1>Country: {params.id}</h1>
      <h2>Locations: </h2> {data.countryLocations}
      <h2>Highlights: </h2> {data.countryHighlights}
    

    </React.Fragment>
  );

}

export default Country;
