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
            ENVIAR UN MAIL A: laboratorio-hnpb@hotmail.com con los siguientes datos:<br />
            Dni: <br />
            Solicitud: <br />
            Pin:
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>¿Qué ocurre si ingreso el número de DNI y no se encuentra el paciente?</Accordion.Header>
          <Accordion.Body>
            Debe concurrir por primera vez al Hospital Naval Puerto Belgrano para generar una ficha médica.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>¿Qué ocurre si ingreso el número de DNI y no se encuentra el paciente?</Accordion.Header>
          <Accordion.Body>
            Debe concurrir por primera vez al Hospital Naval Puerto Belgrano para generar una ficha médica.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>¿Qué ocurre si ingreso el número de DNI y no se encuentra el paciente?</Accordion.Header>
          <Accordion.Body>
            Debe concurrir por primera vez al Hospital Naval Puerto Belgrano para generar una ficha médica.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AllCollapseExample;
