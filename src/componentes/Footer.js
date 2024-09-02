import React from 'react';
import imagen1 from '../assets/images/EscudoArmada.png';
import './Footer.css'; // Asegúrate de que la ruta sea correcta

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.4310709643946!2d-62.096141258346115!3d-38.8912566073318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ed9d4bd679eedb%3A0xc2f8741c86251561!2sHospital%20Naval%20Puerto%20Belgrano!5e0!3m2!1ses!2sar!4v1725291385165!5m2!1ses!2sar"
            width="300"
            height="200"
            style={{ border: 0, borderRadius: '15px' }}
            allowFullScreen
            loading="lazy"
            title="Ubicación del Hospital"
          ></iframe>
        </div>
        <div className="contact-info">
          <p>Teléfono: (2932) 456-7890</p>
          <p>Email: contacto@hnpb.ara.mil.ar</p>
          <p>Dirección: Av. de los Caídos, S/N, Buenos Aires</p>
        </div>
      </div>
      <div className="footer-bottom">
        {/* Contenedor para la imagen del escudo */}
        <div className="footer-left">
          <img className="footer-logo" src={imagen1} alt="Logo del footer" />
        </div>

        {/* Contenedor para los enlaces */}
        <div className="footer-center">
          <div className="footer-links">
            <p><strong style={{ 
              textAlign: 'center', 
              margin: '0', 
              fontWeight: 'bold', 
              fontSize: '1.1rem' 
            }}>Contactanos</strong></p>
            <ul>
              <li><a href="/trabaja-con-nosotros">Trabaja con Nosotros</a></li>
              <li><a href="/formulario-de-contacto">Formulario de Contacto</a></li>
              <li><a href="/sugerencias">Sugerencias</a></li>
            </ul>
          </div>
        </div>

        {/* Contenedor para las redes sociales */}
        <div className="footer-right">
          <div className="iconos-redes-sociales">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <p className="footer-texto">&copy; 2024 Hospital Naval Puerto Belgrano. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
