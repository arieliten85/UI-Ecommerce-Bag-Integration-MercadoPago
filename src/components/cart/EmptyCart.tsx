import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function EmptyCard() {
  return (
    <div className="emptyCart">
      <div className="cart bg-white">
        <Link to={"/"}>
          <p className="backButton">Inicio</p>
        </Link>

        <div className="text-center p-3">
          <h5>Tu carrito está vacío</h5>
          <p>Comenzá a llenarlo con nuestros productos.</p>
        </div>

        <div>
          <Link to={"/products"}>
            <Button className="w-100 m-0 buttonKeepBuy mt-20 rounded-50">
              Ir de compras
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
