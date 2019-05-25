import React from 'react';

class Country extends React.Component {

  render() {
    const { params } = this.props.match
    return (
      <div>
        <h1>Country ID is: {params.id}</h1>
      </div>
    );
  }

}

export default Country;
