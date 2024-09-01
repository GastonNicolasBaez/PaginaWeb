import React, { useEffect } from 'react';
import Banner from './componentes/Banner';
import CarouselComponent from './componentes/Carousel';
import Footer from './componentes/Footer';
import CardSection from './componentes/CardSection';
import CardRow from './componentes/CardGroup';
import Acordeon from './componentes/Acordeon';
import CarouselAutoridades from './componentes/Autoridades';
import './App.css';

const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;
  return function() {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};

const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallax = document.querySelector('.parallax');
      if (parallax) {
        const scrollPosition = window.scrollY;
        // Ajusta el valor de multiplicación para controlar la velocidad del efecto parallax
        parallax.style.backgroundPositionY = `${scrollPosition * -0.1}px`; // Cambia el signo a negativo // Ajuste para mover la imagen hacia abajo
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    // Ejecuta handleScroll una vez al montar el componente para la posición inicial
    handleScroll();
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div id="top" className="App">
      <Banner />
      <main className="main-content">
        <CarouselComponent />
        <div id="novedades" className="separator card-section-bg">
          <span className="text-center">Novedades</span>
        </div>
        <CardRow />
        
        {/* Contenedor adicional para la sección parallax */}
        <div className="parallax-container">
          <div id="autoridades" className="parallax">
            <div className="separator">
              <span className="highlighted-label">Autoridades</span>
            </div>
            <CarouselAutoridades />
          </div>
        </div>
        
        <div id="telefonos-utiles" className="card-section-bg" style={{ marginTop: '0px' }}>
          <div className="separator card-section-bg">
            <span id="tel-util" className="text-center">Telefonos Utiles</span>
          </div>
          <CardSection />
        </div>
        <div id="faq" className="separator faq-section card-section-bg">
          <span className="preguntas-frec">Preguntas Frecuentes</span>
          <div className="accordion-container">
            <Acordeon />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
