import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
  return (
    <header>
      <Navbar expand="lg" fixed="top" className="banner">
        <Container className="d-flex justify-content-between align-items-center">
          <div className="banner-title">
            Hospital Naval Puerto Belgrano
          </div>
        </Container>
      </Navbar>
      <Navbar expand="lg" className="banner-bot">
        <Container className="d-flex justify-content-between align-items-center">
          <div className="nav-container">
            <Nav className="nav-links">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <NavDropdown title="Nuestro Hospital" id="services-dropdown">
                <NavDropdown.Item href="#service1">Acerca del HNPB</NavDropdown.Item>
                <NavDropdown.Item href="#service2">Autoridades</NavDropdown.Item>
                <NavDropdown.Item href="#service3">Misión</NavDropdown.Item>
                <NavDropdown.Item href="#service4">Trabaja en el Hospital</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Información para Pacientes" id="services-dropdown">
                <NavDropdown.Item href="#service1">Turnos</NavDropdown.Item>
                <NavDropdown.Item href="#service2">Mis Resultados</NavDropdown.Item>
                <NavDropdown.Item href="#service3">Servicios Médicos</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contact">Contacto</Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

export default Banner;
