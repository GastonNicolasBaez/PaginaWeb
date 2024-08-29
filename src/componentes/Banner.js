import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {  
      if (window.scrollY > 50) { // Ajusta el valor según cuándo quieras que se active el efecto
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`banner ${isScrolled ? 'fixed' : ''}`}>
      <div className="banner-title">
        Hospital Naval Puerto Belgrano
      </div>
      <div className="banner-subtitle">
          Armada Argentina
        </div>
      <Navbar expand="lg" className="justify-content-center">
        <Navbar.Collapse className="w-100">
          <Nav className="nav-links">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <NavDropdown title="Nuestro Hospital" id="services-dropdown">
              <NavDropdown.Item href="#service1">Acerca del HNPB</NavDropdown.Item>
              <NavDropdown.Item href="#service2">Autoridades</NavDropdown.Item>
              <NavDropdown.Item href="#service3">Misión</NavDropdown.Item>
              <NavDropdown.Item href="#service4">Trabaja en el Hospital</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pacientes" id="services-dropdown">
              <NavDropdown.Item href="#service1">Turnos Web</NavDropdown.Item>
              <NavDropdown.Item href="#service2">Resultados de Laboratorio</NavDropdown.Item>
              <NavDropdown.Item href="#service3">Servicios Médicos</NavDropdown.Item>
              <NavDropdown.Item href="#service4">Informes Rayos</NavDropdown.Item>
              <NavDropdown.Item href="#service5">Historia Clinica</NavDropdown.Item>
            </NavDropdown>  
            <NavDropdown title="Medicos" id="services-dropdown">
              <NavDropdown.Item href="#service1">RX Profesionales</NavDropdown.Item>
              <NavDropdown.Item href="#service2">Control de Gestion</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#TelefonosUtiles">Telefonos Utiles</Nav.Link>
            <Nav.Link href="#footer">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Banner;
