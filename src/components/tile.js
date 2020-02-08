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
        <div class='tile' style={{backgroundImage: `url(${props.imgSrc}?fm=jpg&fl=progressive)`}}>
          <div class='tile-text'>
            <h2 >{props.text} </h2>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Tile;
