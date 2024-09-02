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
    <Carousel id="carouselExampleInterval" interval={10000} className="custom-carousel">
      <Carousel.Item>
      <a onClick={() => handleClick('http://www.hnpbvpn2.duckdns.org:81')} style={{ display: 'block', height: '100%' }}>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        </a>
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
