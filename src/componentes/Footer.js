// Footer.js
import React from 'react';
import imagen1 from '../assets/images/EscudoArmada.png';
import './Footer.css'; // Asegúrate de que la ruta sea correcta

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img className="footer-logo" src={imagen1} alt="Logo del footer" />
          <div className="contact-info">
            <p><strong>Contacto</strong></p>
            <p>Teléfono: (2932) 456-7890</p>
            <p>Email: contacto@hnpb.ara.mil.ar</p>
            <p>Dirección: Av. de los Caídos, S/N, Buenos Aires</p>
          </div>
        </div>
        <div className="iconos-redes-sociales">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <p className="footer-texto">&copy; 2024 Hospital Naval Puerto Belgrano. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
