import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import AutoridadesIMG from './AutoridadesImg';
import './Autoridades.css';

function CarouselAutoridades() {
  const [captionClass, setCaptionClass] = useState('fade-in');
  const [slideIndex, setSlideIndex] = useState(0);

  const handleSlideChange = (selectedIndex) => {
    setCaptionClass('fade-out');
    setTimeout(() => {
      setSlideIndex(selectedIndex);
      setCaptionClass('fade-in');
    }, 400); // Duración de la animación de salida
  };

  return (
    <div className="carousel-component2-container">
      <Carousel
        data-bs-theme="dark"
        className="custom-fade-carousel"
        fade
        indicators={false}
        onSelect={handleSlideChange}
        activeIndex={slideIndex}
      >
        <Carousel.Item>
          <div className="carousel-item-content">
            <AutoridadesIMG text="First slide" />
          </div>
          {slideIndex === 0 && (
            <div className={`carousel-caption-below ${captionClass}`}>
              <h3>Director General</h3>
              <p>CNCPME ROBERTO JORGE IBAÑEZ.</p>
            </div>
          )}
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item-content">
            <AutoridadesIMG text="Second slide" />
          </div>
          {slideIndex === 1 && (
            <div className={`carousel-caption-below ${captionClass}`}>
              <h3>Subdirector Administrativo</h3>
              <p>CFCO BARCHUK RAMON SECUNDINO.</p>
            </div>
          )}
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item-content">
            <AutoridadesIMG text="Third slide" />
          </div>
          {slideIndex === 2 && (
            <div className={`carousel-caption-below ${captionClass}`}>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
          )}
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselAutoridades;
