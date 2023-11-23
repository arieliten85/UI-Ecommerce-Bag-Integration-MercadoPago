import { Button, Container } from "react-bootstrap";
import { useCart } from "react-use-cart";
import EmptyCard from "./EmptyCart";
import CartItems from "./CartItem";

export default function Cart() {
  const { isEmpty } = useCart();

  const handleBuy = () => {
    console.log("Compraste");
  };

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
          <CartItemButtonBuy handleBuy={handleBuy} />
        </div>
      </div>
    </Container>
  );
}

interface ICardItemButtonBut {
  handleBuy: () => void;
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
function CartItemButtonBuy(props: ICardItemButtonBut) {
  const { handleBuy } = props;
  return (
    <div className="buttonBuyItem">
      <Button
        className="w-100 m-0 buttonBuy mt-20 rounded-50"
        onClick={handleBuy}
      >
        Comprar
      </Button>
    </div>
  );
}
