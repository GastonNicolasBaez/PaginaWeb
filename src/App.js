import React from 'react';
import Banner from './componentes/Banner';
import CarouselComponent from './componentes/Carousel';
import Footer from './componentes/Footer';
import CardSection from './componentes/CardSection';
import CardRow from './componentes/CardGroup';
import Acordion from './componentes/Acordeon';
import CarouselComponent2 from './componentes/Autoridades';
import './App.css';

const App = () => {
  return (
    <div id="top" className="App"> {/* Agrega el ID "top" aquí */}
      <Banner />
      <main style={{ marginTop: '0px' }}>
        <CarouselComponent />
        <CardSection />
        <div id="novedades" className="separator">
          <span className="text-center">Novedades</span>
        </div>
        <CardRow />
        <div id="autoridades" className="separator">
          <span className="text-center">Autoridades</span>
        </div>
        <CarouselComponent2 />
        <div id="faq" className="separator">
          <span className="text-center">Preguntas Frecuentes</span>
        </div>
        <Acordion />
      </main>
      <Footer />
    </div>
  );
};

export default App;
