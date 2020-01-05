import React from 'react';
import { Link } from "react-router-dom";

function Tile(props) {

  const toObject = {
    pathname: `/${props.type}/${props.text}`,
    data: props.data
  };

  console.log(props.text + ': ' + props.imgSrc)

  return (
    <div>
      <Link to={toObject}>
        <div>
          <h2>{props.text}</h2>
          <img src={props.imgSrc} width='300px' />
        </div>
      </Link>
    </div>
  )
}

export default Tile;
