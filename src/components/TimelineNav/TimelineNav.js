import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export const TimelineNav = (props) => {
  const anchorData = props.data.map((trip) => ({
    id: trip.sys.id,
    date: trip.fields.tripDate.split("-")[0],
  }));

  const selectedYear = props.selectedYear;

  const handleClick = (e) => {
    props.onDateSelect(e.target.text);
  };

  const removeDuplicates = (array, propName) => {
    var arrayOut = [];
    var i = 0;

    while (i < array.length - 1) {
      arrayOut.push(array[i]);
      if (i + 1 < array.length - 1) {
        while (array[i][propName] === array[i + 1][propName]) {
          i++;
        }
      }
      i++;
    }
    return arrayOut;
  };

  return (
    <div id="side-nav-left">
      <ul className="no-style">
        {props.data &&
          removeDuplicates(anchorData, "date").map((listItem) => (
            <li key={listItem.id}>
              <Link
                key={listItem.id}
                to={`#${listItem.id}`}
                onClick={handleClick}
                className={
                  selectedYear === listItem.date ? "active" : "inactive"
                }
                smooth
              >
                {listItem.date}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
