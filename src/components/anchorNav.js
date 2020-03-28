import React from 'react';
import { Link } from "react-router-dom";

function AnchorNav(props) {

  // <ul>
  //   {dates.map((year) =>
  //     <li> <a href={`#${id}`}> {year} </a> </li>
  //   )}
  // </ul>


  function removeDuplicates(array, propName) {
    console.log("Removing duplicates for array: ");
    console.log(array);
    var arrayOut = [];
    var i = 0;

    while (i < array.length-1) {
      arrayOut.push(array[i]);
      if (i+1 < array.length-1) {
        while (array[i][propName] == array[i+1][propName]) {
          i++;
        }
      }
      i++;
    }
    console.log("New array: ");
    console.log(arrayOut);
    return arrayOut;
  }

  console.log("listItem == " + window.location.href);

  return (

    <div id="side-nav-left">

      <ul class="no-style">
        {props.data && removeDuplicates(props.data, "date").map((listItem) =>
          <li>
            <a
              href={`#${listItem.id}`}
              className={`${window.location.href.indexOf(`#${listItem.id}`) != -1 ? "active" : "inactive"}`}>
                {listItem.date}
            </a>
          </li>
        )}
      </ul>
    </div>

  );

}

export default AnchorNav;
