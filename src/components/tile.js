import React from "react";
import { Link } from "react-router-dom";

function Tile({ id, to, filteredOut, imgSrc, text }) {
  return (
    <Link to={to}>
      <div
        className={`tile ${filteredOut && "filtered"}`}
        style={{
          backgroundImage: `url(${imgSrc}?fm=jpg&w=600&fl=progressive)`,
        }}
      >
        <div className="tile-text">
          <h2>{text}</h2>
        </div>
      </div>
    </Link>
  );
}

export default Tile;
