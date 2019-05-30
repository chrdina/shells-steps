import React from 'react';
import { Link } from "react-router-dom";

function Tile(props) {
  return (
    <div>
      <Link to={`/${props.type}/${props.text}`}>
        <div>
          <h2>{props.text}</h2>
        </div>
      </Link>
    </div>
  )
}

// class Tile extends React.Component {
//   render() {
//
//     return (
//       <div>
//         <Link to={`/${this.props.type}/${this.props.text}`}>
//           <div>
//             <h2>{this.props.text}</h2>
//           </div>
//         </Link>
//
//       </div>
//     );
//   }
//
// }

export default Tile;
