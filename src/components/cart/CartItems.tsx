import { useCart } from "react-use-cart";

export default function CartItem({
  id,
  name,
  price,
  images,
  quantity,
}: ICartItemesProps) {
  return (
    <div key={id} className="cardItem" data-test="cart-item">
      <CartItemView images={images} name={name} />
      <div className="cartItemAction" style={{ width: "500px" }}>
        <CartItemQuantity id={id} quantity={quantity} />
        <CartItemPrice price={price} quantity={quantity} />
        <CartItemRemove id={id} />
      </div>
    </div>
  );
}

interface Images {
  id: string;
  url: string;
}
interface ICartItemesProps {
  id: string;
  name: string;
  price: number;
  images: Images[];
  quantity: number;
}
interface ICartItemQuantityProps {
  id: string;
  quantity: number;
}
interface ICartItemRemoveProps {
  id: string;
}
interface ICartItemPriceProps {
  price: number;
  quantity: number;
}
interface ICartItemViewProps {
  name: string;
  images: Images[];
}

function CartItemRemove(props: ICartItemRemoveProps) {
  const { id } = props;
  const { removeItem } = useCart();

  return (
    <p
      onClick={() => removeItem(id)}
      className="m-0 text-center"
      style={{ width: "30px", color: "red", cursor: "pointer" }}
    >
      <i className="bi bi-trash3"></i>
    </p>
  );
}
function CartItemQuantity(props: ICartItemQuantityProps) {
  const { id, quantity } = props;
  const { updateItemQuantity } = useCart();

  return (
    <div className="buttonCounterQuantity">
      <button onClick={() => updateItemQuantity(id, quantity - 1)}>-</button>

      <span>{quantity}</span>

      <button
        style={{ border: "none", background: "none", color: "blue" }}
        onClick={() => updateItemQuantity(id, quantity + 1)}
      >
        +
      </button>
    </div>
  );
}
function CartItemPrice(props: ICartItemPriceProps) {
  const { price, quantity } = props;

  return (
    <div className="cart-product">
      <p className="m-0">${(price * quantity).toLocaleString("es-ES")}</p>
    </div>
  );
}
function CartItemView(props: ICartItemViewProps) {
  const { name, images } = props;

  return (
    <div className="cartItemProduct">
      <div className="cartItemImages">
        <img
          src={`http://localhost:8000/${images[0]?.url}`}
          alt="product-preview"
          className="cardImage"
        />
      </div>

      <div>
        <p className="cartTitle m-0">{name}</p>
      </div>
    </div>
  );
}
