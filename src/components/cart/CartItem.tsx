import { useCart } from "react-use-cart";
import CartItem from "./CartItems";

export default function CartItems() {
  const { items } = useCart();
  return (
    <>
      {items.map((product) => {
        const { id, name, images, price } = product;
        const quantity = product.quantity || 0;

        return (
          <CartItem
            key={id}
            id={id}
            name={name}
            images={images}
            quantity={quantity}
            price={price}
          />
        );
      })}
    </>
  );
}
