import React from "react";
import { Link } from "react-router-dom";

function Tile({ id, filteredOut = false, image, text, linkTo }) {
  return (
    <>
      <Link className="below-fixed-header" id={id} to={linkTo}>
        <div
          className={`tile ${filteredOut && "filtered"}`}
          style={{
            backgroundImage: `url(${image}?fm=jpg&fl=progressive&q=10)`,
          }}
        >
          <div className="tile-text">
            <h2>{text}</h2>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Tile;
