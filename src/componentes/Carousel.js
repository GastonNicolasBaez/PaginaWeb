import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../assets/images/Anuncio IOSFA.png';
import image2 from '../assets/images/Banner Laboratorio.png';
import image3 from '../assets/images/BannerRX.png';


const CarouselComponent = () => { 

  const handleClick = (url) => {
    window.location.href = url;
  };
  
  return (
    <Carousel id="carouselExampleInterval" interval={10000} className="custom-carousel" indicators={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <a onClick={() => handleClick('http://www.hnpb.ara.mil.ar:8080/web-patient/login')} style={{ display: 'block', height: '100%' }}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
        </a>
      </Carousel.Item>
      <Carousel.Item >
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
