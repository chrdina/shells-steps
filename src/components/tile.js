import React from 'react';
import { Link } from "react-router-dom";

function Tile(props) {

  const toObject = {
    pathname: `/${props.type}/${props.text}`,
    data: props.data
  };

  return (
    <div>
      <Link to={toObject}>
        <div>
          <h2>{props.text}</h2>
        </div>
      </Link>
    </div>
  )
}

export default Tile;
