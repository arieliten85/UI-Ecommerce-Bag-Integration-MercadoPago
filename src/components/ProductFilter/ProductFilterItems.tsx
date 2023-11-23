import { Accordion, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const categoriasInventadas = [
  "Deporte y Fitness",
  "Computacion",
  "Urbano",
  "Bebés",
  "Viajes",
];

export const ProductFilterItems = () => {
  return (
    <Accordion defaultActiveKey="0">
      <h2 className="px-3 py-3" style={{ color: "rgb(121, 141, 105)" }}>
        Filtrar por
      </h2>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Categoría</Accordion.Header>
        <Accordion.Body className="p-0 py-3">
          <ul className="list-group">
            {categoriasInventadas.map((categoria, index) => (
              <li className="list-group-item border-0" key={index}>
                <Link to={"/"}>{categoria}</Link>
              </li>
            ))}
          </ul>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header> Precios</Accordion.Header>
        <Accordion.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Precio Mínimo</Form.Label>
              <Form.Control
                type="number"
                value={"precioMin"}
                placeholder="Min"
                onChange={() => {
                  console.log("click");
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Precio Máximo</Form.Label>
              <Form.Control
                type="number"
                value={"precioMax"}
                placeholder="Max"
                onChange={() => {
                  console.log("click");
                }}
              />
            </Form.Group>
          </Form>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Ordenar por Precio</Accordion.Header>
        <Accordion.Body>
          <Form.Group className="mb-3">
            <Form.Check
              type="radio"
              label="Menor a Mayor"
              name="ordenarPrecio"
              id="menorAMayor"
              onChange={() => {
                console.log("click");
              }}
            />
            <Form.Check
              type="radio"
              label="Mayor a Menor"
              name="ordenarPrecio"
              id="mayorAMenor"
              onChange={() => {
                console.log("click");
              }}
            />
          </Form.Group>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>Más Vendidos</Accordion.Header>
        <Accordion.Body>
          <Form.Group className="mb-3">
            <Form.Check
              type="radio"
              label="Más Vendidos Primero"
              name="ordenarMasVendidos"
              id="masVendidosPrimero"
              onChange={() => {
                console.log("click");
              }}
            />
          </Form.Group>
        </Accordion.Body>
      </Accordion.Item>

      <div className="text-center w-100">
        <Button className="buttonPrimary p-2 my-4">Aplicar Filtros</Button>
      </div>
    </Accordion>
  );
};
