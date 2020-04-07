import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
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
      <div class="carousel">
        <Carousel
          value={this.state.value}
          onChange={this.onChange}
          centered
          arrowLeft={<FontAwesomeIcon className="carousel-arrow" icon="chevron-left"/>}
          arrowRight={<FontAwesomeIcon className="carousel-arrow" icon="chevron-right"/>}
          addArrowClickHandler

        >
          {this.props.items && this.props.items.map(
            (image, key) => (<img src={`${image.fields.file.url}?fm=jpg&fl=progressive&q=30`} key={key} alt={image.fields.title} />)
          )}
        </Carousel>
      </div>
    );
  }

}

export default CustomCarousel;
