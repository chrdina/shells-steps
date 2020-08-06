import React from "react";
import { Link } from "react-router-dom";

function Tile({ id, filteredOut = false, image, text, linkTo }) {
  return (
    <div>
      <Link className="below-fixed-header" id={id} to={linkTo}>
        <div
          className={`tile ${filteredOut && "filtered"}`}
          style={{
            backgroundImage: `url(${image}?fm=jpg&w=600&fl=progressive)`,
          }}
        >
          <div className="tile-text">
            <h2>{text}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Tile;
