import React from 'react';
import { Link } from "react-router-dom";

function Tile(props) {

  const toObject = {
    pathname: props.to,
    data: props.data
  };

  return (
    <div>
      <Link id={props.id} to={toObject}>
        <div className={`tile ${props.filteredOut && "filtered"}`} style={{backgroundImage:`url(${props.imgSrc}?fm=jpg&w=600&fl=progressive)`}}>
          <div className='tile-text'>
            <h2>{props.text}</h2>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Tile;
