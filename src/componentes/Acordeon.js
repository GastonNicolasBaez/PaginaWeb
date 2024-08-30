import Accordion from 'react-bootstrap/Accordion';

function AllCollapseExample() {
  return (
    <div className="mx-auto" style={{ maxWidth: '1000px' }}>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>¿Que ocurre si después de ingresar el DNI, Solicitud y Pin no obtengo el resultado de los Analisis ?</Accordion.Header>
          <Accordion.Body>
          ENVIAR UN MAIL A: laboratorio-hnpb@hotmail.com con los siguientes datos :<br/>
                Dni: <br/>
                Solicitud: <br/>
                Pin: 
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header> ¿Que ocurre si ingreso el numero de DNI y no se encuentra el paciente?</Accordion.Header>
          <Accordion.Body>
          Debe concurrir por primera vez al Hospital Naval Puerto Belgrano para generar una ficha medica.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AllCollapseExample;
