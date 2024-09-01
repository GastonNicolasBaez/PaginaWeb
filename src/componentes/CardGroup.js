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
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
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
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.
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
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This card has even longer content than the
                first to show that equal height action.
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
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is another card with different content.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 5 mins ago</small>
            </Card.Footer>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="card">
            <ImagenesNovedades text="noticia-cinco" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Another card with additional supporting text.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 5 mins ago</small>
            </Card.Footer>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="card">
            <ImagenesNovedades text="noticia-seis" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is the last card in the second row.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default GroupExample;
