import React, { useEffect, useState } from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

library.add(faCoffee, faChevronLeft, faChevronRight);
// ...

class CustomCarousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  onChange = value => this.setState({ value });

  render() {
    return (
      <div>
        <Carousel
          value={this.state.value}
          onChange={this.onChange}
          centered
          arrowLeft={<FontAwesomeIcon className="carousel-arrow" icon="chevron-left" size="2x"/>}
          arrowRight={<FontAwesomeIcon className="carousel-arrow" icon="chevron-right" size="2x"/>}
          addArrowClickHandler

        >
          {this.props.items && this.props.items.map(
            (image, key) => (<img src={`${image.fields.file.url}?fm=jpg&fl=progressive&h=400&w=600`} key={key} />)
          )}
        </Carousel>
      </div>
    );
  }

}

export default CustomCarousel;
