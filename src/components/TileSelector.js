import React, { useState } from "react";
import Tile from "./tile";

function TileSelector({ items }) {
  console.log(items);
  return (
    <div className="tiles">
      {items.map((item, key) => (
        <Tile
          key={key}
          id={item.id}
          linkTo={item.linkTo}
          image={item.imageURL}
          text={item.text}
          filteredOut={item.filteredOut}
        />
      ))}
    </div>
  );
}

export default TileSelector;
