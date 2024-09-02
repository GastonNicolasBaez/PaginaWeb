import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import styles from './CardSection.module.css'; // Importa el archivo CSS módulo

import image1 from '../assets/images/pildora.jpg';
import image2 from '../assets/images/Ambulancia.jpg';
import image3 from '../assets/images/PC.jpg';
import image4 from '../assets/images/Diente.jpg';
import image5 from '../assets/images/Proveta.jpg';
import image6 from '../assets/images/Curitas.jpg';


const CardSection = () => {
  return (
    <Container>
      <Row className="my-4">
        <Col md={4} className="mb-4">
          <Card className="border-light text-center">
            <Card.Img variant="top" src={image1} alt="Image 1" className="rounded-circle img-thumbnail shadow-sm mx-auto d-block" />
            <Card.Body>
              <Card.Title>Turnos</Card.Title>
              <Card.Subtitle className="mb-2 text-muted phone-number">2932-520066</Card.Subtitle>
              <Card.Text>
                <p>Consulta nuestra línea de turnos para mayor información.</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="border-light text-center">
            <Card.Img variant="top" src={image2} alt="Image 2" className="rounded-circle img-thumbnail shadow-sm mx-auto d-block" />
            <Card.Body>
              <Card.Title>Guardias Médicas</Card.Title>
              <Card.Text>
                <ul className="guardias-list">
                  <li>Medicina General: 1234-567890</li>
                  <li>Pediatría: 2345-678901</li>
                  <li>Asistencia a la Familia: 3456-789012</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="border-light text-center">
            <Card.Img variant="top" src={image3} alt="Image 4" className="rounded-circle img-thumbnail shadow-sm mx-auto d-block" />
            <Card.Body>
              <Card.Title>Imágenes</Card.Title>
              <Card.Subtitle className="mb-2 text-muted phone-number">11-35916649</Card.Subtitle>
              <Card.Text>
                Contamos con tecnología avanzada para la realización de estudios de imágenes. Nuestro equipo está capacitado para ofrecer diagnósticos precisos y rápidos.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="border-light text-center">
            <Card.Img variant="top" src={image4} alt="Image 4" className="rounded-circle img-thumbnail shadow-sm mx-auto d-block" />
            <Card.Body>
              <Card.Title>Odontología</Card.Title>
              <Card.Subtitle className="mb-2 text-muted phone-number">291-4497703</Card.Subtitle>
              <Card.Text>
                Servicios odontológicos de calidad para toda la familia.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="border-light text-center">
            <Card.Img variant="top" src={image5} alt="Image 4" className="rounded-circle img-thumbnail shadow-sm mx-auto d-block" />
            <Card.Body>
              <Card.Title>Laboratorio</Card.Title>
              <Card.Subtitle className="mb-2 text-muted phone-number">2932465959</Card.Subtitle>
              <Card.Text>
                Realizamos análisis clínicos con resultados precisos y rápidos.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="border-light text-center">
            <Card.Img variant="top" src={image6} alt="Image 4" className="rounded-circle img-thumbnail shadow-sm mx-auto d-block" />
            <Card.Body>
              <Card.Title>Kinesiología</Card.Title>
              <Card.Subtitle className="mb-2 text-muted phone-number">291-5713249</Card.Subtitle>
              <Card.Text>
                Ofrecemos tratamientos de kinesiología para la rehabilitación y recuperación de lesiones. Nuestro equipo está preparado para brindar un servicio personalizado y efectivo.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CardSection;
