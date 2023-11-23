import { Button, Card } from "react-bootstrap";
import { IProduct } from "../../interfaces/interfaces";

interface IProductCardProps {
  product: IProduct;
  index: number;
  handleAddToCart: (product: IProduct) => void;
}
export default function ProductCard(props: IProductCardProps) {
  const { index, product, handleAddToCart } = props;
  return (
    <div className="p-2 w-100 d-flex justify-content-center">
      <Card
        data-test="product-card"
        key={index}
        className="m-0 card card-style d-flex flex-column justify-content-between rounded-15 overflow-hidden"
        style={{
          height: "400px",
          width: "280px",
          boxShadow: "-3px 3px 15px -7px rgba(0,0,0,0.75)",
        }}
      >
        <div className="itemImages">
          <Card.Img
            variant="top"
            src={`http://localhost:8000/${product.images[0]?.url}`}
            className="h-100 p-2"
            data-test="product-image"
            style={{
              border: "#ccc8aa solid 1.5px",
            }}
          />
        </div>

        <div
          style={{
            height: "100%",
          }}
        >
          <Card.Body className="p-0 cardBody">
            <Card.Text
              data-test="product-price"
              className="m-0  fw-bold text-center text-danger"
            >
              ${product.price.toLocaleString("es-ES")}
            </Card.Text>

            <Card.Title
              data-test="product-name"
              className=" fs-6 fw-bold mb-10 text-center  text-secondary"
            >
              {product.name}
            </Card.Title>

            <Button
              data-test="button-add-to-cart"
              className="w-100 m-0 buttonCard mt-20 rounded-50"
              variant="outline-secondary"
              onClick={() => handleAddToCart(product)}
            >
              <span>
                <i className="bi bi-bag-fill fs-5 p-2"></i>
              </span>
              Agregar al carrito
            </Button>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
}
