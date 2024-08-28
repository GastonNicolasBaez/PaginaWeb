import React from 'react';
import Banner from './componentes/Banner';
import CarouselComponent from './componentes/Carousel';
import Footer from './componentes/Footer';
import CardSection from './componentes/CardSection';
import CardRow from './componentes/CardRow';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Banner />
      <main style={{ marginTop: '0px' }}> {/* Ajusta el margen superior para el banner fijo */}
        <CarouselComponent />
        <CardSection />  {/* Agrega la sección de cards aquí */}
        <CardRow />    {/*agrega la seccion de cards */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
