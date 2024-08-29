// src/componentes/CardSection.js
import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './CardSection.css'; // Importa el archivo CSS para los estilos personalizados

import image1 from '../assets/images/pildora.jpg';
import image2 from '../assets/images/Ambulancia.jpg';
import image3 from '../assets/images/PC.jpg';
import image4 from '../assets/images/hospital.jpg';

const CardSection = () => {
  return (
    <Container>
      <Row className="my-4">
        <Col md={3} className="mb-4">
          <Card className="border-light text-center align-items-center">
            <Card.Img variant="top" src={image1} alt="Image 1" className="rounded-circle img-thumbnail shadow-sm mx-auto d-block align-items-center" />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-4">
          <Card className="border-light text-center">
            <Card.Img variant="top" src={image2} alt="Image 2" className="rounded-circle img-thumbnail shadow-sm mx-auto d-block" />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-4">
          <Card className="border-light text-center">
            <Card.Img variant="top" src={image3} alt="Image 3" className="rounded-circle img-thumbnail shadow-sm mx-auto d-block" />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-4">
          <Card className="border-light text-center">
            <Card.Img variant="top" src={image4} alt="Image 4" className="rounded-circle img-thumbnail shadow-sm mx-auto d-block" />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CardSection;
