import React, { useState } from "react";
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

const CustomCarousel = (props) => {
  const [value, setValue] = useState(0);

  const onChange = (value) => setValue(value);

  const handleKeyPress = (e) => {
    console.log("key pressed: " + e.key);
    if (e.key === "ArrowRight") {
      setValue(value + 1);
    } else if (e.key === "ArrowLeft") setValue(value - 1);
  };

  return (
    <div className="carousel" tabIndex="0" onKeyDown={(e) => handleKeyPress(e)}>
      <Carousel
        value={value}
        onChange={onChange}
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
        {props.items &&
          props.items.map((image, key) => (
            <img
              src={`${image.fields.file.url}?fm=jpg&fl=progressive&q=30`}
              key={key}
              alt={image.fields.title}
            />
          ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
