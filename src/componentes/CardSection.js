import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import styles from './CardSection.module.css'; // Importa el archivo CSS módulo

import image1 from '../assets/images/pildora.jpg';
import image2 from '../assets/images/Ambulancia.jpg';
import image3 from '../assets/images/PC.jpg';
import image4 from '../assets/images/Diente.jpg';
import image5 from '../assets/images/Proveta.jpg';
import image6 from '../assets/images/Curitas.jpg';

const cardsData = [
  {
    image: image1,
    title: 'Turnos',
    phone: '2932-520066',
    description: 'Consulta nuestra línea de turnos para mayor información.'
  },
  {
    image: image2,
    title: 'Guardias Médicas',
    phone: null, // No hay número principal, se listan varios
    description: (
      <ul className={styles.cardSectionGuardiasList}>
        <li className={styles.cardSectionGuardiasListItem}>Medicina General: 1234-567890</li>
        <li className={styles.cardSectionGuardiasListItem}>Pediatría: 2345-678901</li>
        <li className={styles.cardSectionGuardiasListItem}>Asistencia a la Familia: 3456-789012</li>
      </ul>
    )
  },
  {
    image: image3,
    title: 'Imágenes',
    phone: '11-35916649',
    description: 'Contamos con tecnología avanzada para la realización de estudios de imágenes.'
  },
  {
    image: image4,
    title: 'Odontología',
    phone: '291-4497703',
    description: 'Servicios odontológicos de calidad para toda la familia.'
  },
  {
    image: image5,
    title: 'Laboratorio',
    phone: '2932-465959',
    description: 'Realizamos análisis clínicos con resultados precisos y rápidos.'
  },
  {
    image: image6,
    title: 'Kinesiología',
    phone: '291-5713249',
    description: 'Ofrecemos tratamientos de kinesiología para la rehabilitación y recuperación de lesiones.'
  }
];

const CardSection = () => {
  return (
    <Container>
      <Row className="my-4">
        {cardsData.map((card, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Card className={`${styles.cardSectionCard} border-light text-center`}>
              <Card.Img
                variant="top"
                src={card.image}
                alt={`Image ${index + 1}`}
                className={`${styles.cardSectionImg} rounded-circle img-thumbnail mx-auto d-block`}
              />
              <Card.Body className={styles.cardSectionBody}>
                <Card.Title className={styles.cardSectionTitle}>{card.title}</Card.Title>
                {card.phone && (
                  <Card.Subtitle className={`${styles.cardSectionSubtitle} mb-2 text-muted phone-number`} style={{ fontSize: '1rem' }}>
                    {card.phone}
                  </Card.Subtitle>
                )}
                <Card.Text className={styles.cardSectionText}>
                  {card.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CardSection;
