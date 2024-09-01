import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../assets/images/LogoHNPB.png'; // Asegúrate de poner la ruta correcta a tu logo
import './Banner.css';

const Banner = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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

  useEffect(() => {
    if (isScrolled) {
      document.body.classList.add('body-fixed-banner');
    } else {
      document.body.classList.remove('body-fixed-banner');
    }
  }, [isScrolled]);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100, // Ajusta el valor si es necesario
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={`banner ${isScrolled ? 'fixed' : ''}`}>
      <div className={`banner-content ${isScrolled ? 'shrink' : ''}`}>
        <img src={logo} alt="Hospital Naval Puerto Belgrano Logo" className="banner-logo" />
        <div className="banner-text">
          <div className={`banner-title ${isScrolled ? 'hide' : ''}`}>
            <a href="#top" onClick={(e) => handleScroll(e, 'top')}>
              Hospital Naval Puerto Belgrano
            </a>
          </div>
          <div className={`banner-subtitle ${isScrolled ? 'hide' : ''}`}>
            Armada Argentina
          </div>
        </div>
      </div>
      <Navbar expand="lg" className="justify-content-center">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-links">
            <NavDropdown title="Nuestro Hospital" id="hospital-dropdown">
              <NavDropdown.Item href="#service3">Servicios Médicos</NavDropdown.Item>
              <NavDropdown.Item href="#service1">Acerca del HNPB</NavDropdown.Item>
              <NavDropdown.Item href="#service2">Autoridades</NavDropdown.Item>
              <NavDropdown.Item href="#service3">Misión</NavDropdown.Item>
              <NavDropdown.Item href="#service4">Trabaja en el Hospital</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pacientes" id="patients-dropdown">
              <NavDropdown.Item href="#service1">Turnos Web</NavDropdown.Item>
              <NavDropdown.Item href="#service2">Resultados de Laboratorio</NavDropdown.Item>
              <NavDropdown.Item href="#service4">Informes Rayos</NavDropdown.Item>
              <NavDropdown.Item href="#service5">Historia Clinica</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Profesionales" id="doctors-dropdown">
              <NavDropdown.Item href="#service1">RX Profesionales</NavDropdown.Item>
              <NavDropdown.Item href="#service2">Control de Gestion</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#telefonos-utiles">Telefonos Utiles</Nav.Link>
            <Nav.Link href="#footer">Contacto</Nav.Link>
            <Nav.Link href="#faq" onClick={(e) => handleScroll(e, 'faq')}>
              FAQ
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Banner;
