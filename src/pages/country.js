import React from 'react';

function Country(props) {

  const { params } = props.match
  return (
    <React.Fragment>
      <h1>Country ID is: {params.id}</h1>
    </React.Fragment>
  );

}

export default Country;
