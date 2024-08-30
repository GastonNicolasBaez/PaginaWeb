import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import AutoridadesIMG from './AutoridadesImg';
import './Autoridades.css'; // Asegúrate de importar el archivo CSS

function CarouselComponent2() {
  return (
    <div className="carousel-component2-container">
      <style>
        {`
          .carousel-component2-container .carousel-indicators {
            display: none;
          }
        `}
      </style>
      <Carousel className="custom-fade-carousel" fade>
        <Carousel.Item>
          <div className="carousel-item-content">
            <AutoridadesIMG text="First slide" />
            <div className="carousel-caption">
              <h3>Director General</h3>
              <p>CNCPME ROBERTO JORGE IBAÑEZ.</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item-content">
            <AutoridadesIMG text="Second slide" />
            <div className="carousel-caption">
              <h3>Subdirector Administrativo</h3>
              <p>CFCO BARCHUK RAMON SECUNDINO.</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item-content">
            <AutoridadesIMG text="Third slide" />
            <div className="carousel-caption">
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComponent2;
