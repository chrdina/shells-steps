import React from 'react';

class Trip extends React.Component {

  render() {
    const { params } = this.props.match
    return (
      <div>
        <h1>Trip ID is: {params.id}</h1>
      </div>
    );
  }

}

export default Trip;
