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
    }, 200); // Duración de la animación de salida
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
            <AutoridadesIMG text="Primer slide" />
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
            <AutoridadesIMG text="Segundo slide" />
          </div>
          {slideIndex === 1 && (
            <div className={`carousel-caption-below ${captionClass}`}>
              <h3>Subdirector Operativo</h3>
              <p>CNIM BERTERREIX FACUNDO.</p>
            </div>
          )}
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item-content">
            <AutoridadesIMG text="Tercer slide" />
          </div>
          {slideIndex === 2 && (
            <div className={`carousel-caption-below ${captionClass}`}>
              <h3>Subdirector Asistencial</h3>
              <p>CNME ROSALES EDUARDO ANDRES.</p>
            </div>
          )}
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item-content">
            <AutoridadesIMG text="Cuarto slide" />
          </div>
          {slideIndex === 3 && (
            <div className={`carousel-caption-below ${captionClass}`}>
              <h3>Subdirector Administrativo</h3>
              <p>CFCO BARCHUK RAMON SECUNDINO.</p>
            </div>
          )}
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselAutoridades;
