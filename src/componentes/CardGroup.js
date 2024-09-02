import React, { useEffect, useRef } from 'react';
import Card from 'react-bootstrap/Card';
import ImagenesNovedades from './ImagenesNovedades';
import 'animate.css'; // Importa animate.css para las animaciones
import './CardGroup.module.css'; // Asegúrate de importar el archivo CSS módulo

function GroupExample() {
  const cardSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            observer.unobserve(entry.target); // Para que la animación ocurra solo una vez
          }
        });
      },
      {
        threshold: 0.1, // La cantidad de visibilidad requerida para activar la animación
      }
    );

    const cards = cardSectionRef.current.querySelectorAll('.card');
    cards.forEach(card => observer.observe(card));

    return () => {
      // Cleanup observer when the component is unmounted
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="container group-example" ref={cardSectionRef}>
      <div className="row">
        <div className="col-md-4">
          <Card className="card">
            <ImagenesNovedades text="noticia-uno" />
            <Card.Body>
              <Card.Title>Noticias </Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="card">
            <ImagenesNovedades text="noticia-dos" />
            <Card.Body>
              <Card.Title>Noticias</Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="card">
            <ImagenesNovedades text="noticia-tres" />
            <Card.Body>
              <Card.Title>Noticias</Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-4">
          <Card className="card">
            <ImagenesNovedades text="noticia-cuatro" />
            <Card.Body>
              <Card.Title>Noticias</Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Actualizado hace 5 minutos</small>
            </Card.Footer>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="card">
            <ImagenesNovedades text="noticia-cinco" />
            <Card.Body>
              <Card.Title>Noticias</Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Actualizado hace 5 minutos</small>
            </Card.Footer>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="card">
            <ImagenesNovedades text="noticia-seis" />
            <Card.Body>
              <Card.Title>Noticias</Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default GroupExample;
