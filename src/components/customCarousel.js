import React, { useState } from "react";
import Carousel, { arrowsPlugin } from "@brainhubeu/react-carousel";
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
  if (!props.items) return <></>;

  return (
    <div className="carousel" tabIndex="0" onKeyDown={(e) => handleKeyPress(e)}>
      <Carousel
        value={value}
        onChange={onChange}
        plugins={[
          {
            resolve: arrowsPlugin,
            options: {
              arrowLeft: (
                <FontAwesomeIcon
                  className="carousel-arrow"
                  icon="chevron-left"
                />
              ),
              arrowRight: (
                <FontAwesomeIcon
                  className="carousel-arrow"
                  icon="chevron-right"
                />
              ),
              addArrowClickHandler: true,
            },
          },
          "infinite",
          "centered",
        ]}
      >
        {props.items.map((image) => (
          <img
            src={`${image.fields.file.url}?fm=jpg&fl=progressive&q=30`}
            key={image.sys.id}
            alt={image.fields.title}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
