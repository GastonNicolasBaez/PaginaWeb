import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Acordeon.css'; // Asegúrate de que esta ruta sea correcta

function AllCollapseExample() {
  return (
    <div className="accordion-container">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>¿Qué ocurre si después de ingresar el DNI, Solicitud y Pin no obtengo el resultado de los Análisis?</Accordion.Header>
          <Accordion.Body>
            Enviar un mail a: laboratorio-hnpb@hotmail.com<br /> 
            con los siguientes datos:<br />
            Dni: <br />
            Solicitud: <br />
            Pin:
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>¿Qué ocurre si ingreso el número de DNI y no se encuentra el paciente?</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>¿Pregunta 3?</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>¿Pregunta 4?</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AllCollapseExample;
