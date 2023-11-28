import { Button, Container } from "react-bootstrap";
import { useCart } from "react-use-cart";
import EmptyCard from "./EmptyCart";
import CartItems from "./CartItem";

import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useState } from "react";
import axios from "axios";

export default function Cart() {
  const { isEmpty, items } = useCart();

  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago("TEST-e563e01b-390d-4a1d-b3c1-0f541086972d");

  const handleBuy = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/payment/create_preference",
        items
      );

      setPreferenceId(response.data.id);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  console.log("PRODUCTOS", items);

  if (isEmpty) {
    return <EmptyCard />;
  }

  return (
    <Container
      className=" vh-100  "
      style={{
        marginTop: "50px",
      }}
    >
      <div className="cart bg-white p-4">
        <CartItemTotalItems />
        <CartItems />
        <div className="cartItemSummary">
          <CartItemSubTotal />
          <div className="buttonBuyItem">
            <Button
              className="w-100 m-0 buttonBuy mt-20 rounded-50"
              onClick={handleBuy}
            >
              Comprar
            </Button>
            {preferenceId && <Wallet initialization={{ preferenceId }} />}
          </div>
        </div>
      </div>
    </Container>
  );
}

function CartItemSubTotal() {
  const { cartTotal } = useCart();

  return (
    <div className="subTotalItem_price">
      <strong className="fs-4">SubTotal</strong>
      <h4>${cartTotal.toLocaleString("es-ES")}</h4>
    </div>
  );
}
function CartItemTotalItems() {
  const { totalItems } = useCart();

  return (
    <h4 className="item py-4 px-4">
      Tu carrito <span className="fs-6">({totalItems})</span>
    </h4>
  );
}
