import React from 'react';
import { HashLink as Link } from "react-router-hash-link";

function ShowSelectedDate(props) {
  return <p>{props.date}</p>;
}

class AnchorNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedYear: ""
    };
  }

  handleClick = (e) => {
    this.setState({selectedYear: e.target.text});
  }

  removeDuplicates(array, propName) {
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


  render() {

    const selectedYear = this.state.selectedYear;

    return (

      <div id="side-nav-left">

        <ShowSelectedDate date={selectedYear}/>

        <ul class="no-style">
          {this.props.data && this.removeDuplicates(this.props.data, "date").map((listItem) =>
            <li>
              <Link
                to={`#${listItem.id}`}
                onClick={this.handleClick}
                value={listItem.id}
                className={`${window.location.href.indexOf(`#${listItem.id}`) != -1 ? "active" : "inactive"}`}
                smooth
              >
                {listItem.date}
              </Link>
            </li>
          )}
        </ul>
      </div>

    );
  }

}

export default AnchorNav;
