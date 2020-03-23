import React from 'react';
import { Link } from "react-router-dom";

function AnchorNav(props) {

  // <ul>
  //   {dates.map((year) =>
  //     <li> <a href={`#${id}`}> {year} </a> </li>
  //   )}
  // </ul>

  return (

    <div id="side-nav-left">
      Select date:
      <ul>
        {props.data && props.data.map((listItem) =>
          <li> <a href={`#${listItem.name}`}> {listItem.date} </a> </li>
        )}
      </ul>
    </div>

  );

}

export default AnchorNav;
