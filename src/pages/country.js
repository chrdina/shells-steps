import React from 'react';

function Country(props) {

  const { params } = props.match;
  const data = props.location.data;
  console.log(data);

  return (
    <React.Fragment>
      <h1>Country ID is: {params.id}</h1>
    </React.Fragment>
  );

}

export default Country;
