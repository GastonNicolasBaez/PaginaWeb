// src/componentes/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-content d-flex justify-content-between align-items-center">
        {/* Logo */}
        <img className="footer-logo" src='./assets/images/PC.jpg' alt="Logo del footer" />

        {/* Información de contacto */}
        <div className="contact-info text-center">
          <p><strong>Contacto:</strong></p>
          <p>Teléfono: (123) 456-7890</p>
          <p>Email: contacto@hnpb.ara.mil.ar</p>
          <p>Dirección: Av. de los Caídos, S/N, Buenos Aires</p>
        </div>

        {/* Redes Sociales */}
        <div className="iconos-redes-sociales">
          <a href="https://twitter.com" target='_blank' rel="noopener noreferrer">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="https://instagram.com" target='_blank' rel="noopener noreferrer">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://whatsapp.com" target='_blank' rel="noopener noreferrer">
            <i className="bi bi-whatsapp"></i>
          </a>
        </div>
      </div>
      <p className="footer-texto">&copy; 2024 Hospital Naval Puerto Belgrano</p>
    </footer>
  );
};

export default Footer;
