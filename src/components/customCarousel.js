import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCoffee,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

library.add(faCoffee, faChevronLeft, faChevronRight);
// ...

class CustomCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  onChange = (value) => this.setState({ value });

  handleKeyPress = (e) => {
    console.log("key pressed: " + e.key);
    if (e.key === "ArrowRight") {
      this.setState({ value: this.state.value + 1 });
    } else if (e.key === "ArrowLeft")
      this.setState({ value: this.state.value - 1 });
  };

  render() {
    return (
      <div
        class="carousel"
        tabIndex="0"
        onKeyDown={(e) => this.handleKeyPress(e)}
      >
        <Carousel
          value={this.state.value}
          onChange={this.onChange}
          centered
          infinite
          arrowLeft={
            <FontAwesomeIcon className="carousel-arrow" icon="chevron-left" />
          }
          arrowRight={
            <FontAwesomeIcon className="carousel-arrow" icon="chevron-right" />
          }
          addArrowClickHandler
          keepDirectionWhenDragging
        >
          {this.props.items &&
            this.props.items.map((image, key) => (
              <img
                src={`${image.fields.file.url}?fm=jpg&fl=progressive&q=30`}
                key={key}
                alt={image.fields.title}
              />
            ))}
        </Carousel>
      </div>
    );
  }
}

export default CustomCarousel;
