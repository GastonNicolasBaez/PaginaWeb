import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../assets/images/SliderErgo.jpg';
import image2 from '../assets/images/SliderLabo.jpg';
import image3 from '../assets/images/SliderRX.jpg';


const CarouselComponent = () => { 
  return (
    <Carousel id="carouselExampleInterval" interval={10000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
