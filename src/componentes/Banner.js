// src/componentes/Banner.js
import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
  return (
    <header>
      <Navbar expand="lg" fixed="top" className="banner">
        <Container className="flex-column align-items-center">
          {/* Título centrado */}
          <Navbar.Brand className="mx-auto text-center banner-title">
            Hospital Naval Puerto Belgrano
          </Navbar.Brand>

          {/* Navbar contenido (NavLinks) */}
          <Navbar.Collapse className="w-100 justify-content-center">
            <Nav className="nav-links">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <NavDropdown title="Nuestro Hospital" id="services-dropdown">
                <NavDropdown.Item href="#service1">Acerca del HNPB</NavDropdown.Item>
                <NavDropdown.Item href="#service2">Autoridades</NavDropdown.Item>
                <NavDropdown.Item href="#service3">Mision</NavDropdown.Item>
                <NavDropdown.Item href="#service4">Trabaja en el Hospital</NavDropdown.Item>
                </NavDropdown>
                
              <NavDropdown title="Informacion para Pacientes" id="services-dropdown">
                <NavDropdown.Item href="#service1">Turnos</NavDropdown.Item>
                <NavDropdown.Item href="#service2">Mis Resultados</NavDropdown.Item>
                <NavDropdown.Item href="#service3">Servicios Medicos</NavDropdown.Item>
                <NavDropdown.Item href="#service4">Service 4</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contact">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Banner;
