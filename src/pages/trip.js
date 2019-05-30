import React from 'react';

function Trip(props) {

  const { params } = props.match
  return (
    <React.Fragment>
      <h1>Trip ID is: {params.id}</h1>
    </React.Fragment>
  );

}

export default Trip;
