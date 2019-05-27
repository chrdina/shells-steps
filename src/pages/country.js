import React from 'react';

class Country extends React.Component {

  render() {
    const { params } = this.props.match
    return (
      <React.Fragment>
        <h1>Country ID is: {params.id}</h1>
      </React.Fragment>
    );
  }

}

export default Country;
