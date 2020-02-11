import React from 'react';
import { Link } from "react-router-dom";

function Tile(props) {

  const toObject = {
    pathname: props.to,
    data: props.data
  };

  console.log(props.text + ': ' + props.imgSrc)

  return (
    <div>
      <Link to={toObject}>
        <div class='tile' style={{ backgroundImage: `url(${props.imgSrc})` }}>
          <div class='tile-text'>
            <h2 >{props.text} </h2>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Tile;
