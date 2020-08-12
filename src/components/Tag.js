import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Tag({ icon, text }) {
  return (
    <div className="tag">
      <FontAwesomeIcon icon={icon} className="icon" />
      <div className="tag-text">{text}</div>
    </div>
  );
}

export default Tag;
