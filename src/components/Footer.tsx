import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5 footer-zone">
      <Container className="py-5">
        <Row>
          <Col md={6}>
            <h5>Información de contacto</h5>
            <p>Dirección: 123 Calle Principal, Ciudad, País</p>
            <p>Email: contacto@example.com</p>
          </Col>
          <Col md={6}>
            <h5>Navegacion</h5>
            <ul className="p-0">
              <li>
                <p>Inicio</p>
              </li>
              <li>
                <p>Productos</p>
              </li>
              <li>
                <p>Nosotros</p>
              </li>
              <li>
                <p>Como comprar</p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-center">
        <p className="pb-2 m-0">© 2023. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
