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
        <div class='tile'>
          <img class='tile-image' src={props.imgSrc} />
          <h2 class='tile-text'>{props.text}</h2>
        </div>
      </Link>
    </div>
  )
}

export default Tile;
