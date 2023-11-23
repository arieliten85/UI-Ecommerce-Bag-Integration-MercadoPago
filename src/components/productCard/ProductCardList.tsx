import ProductCard from "./ProductCard";
import { IProduct } from "../../interfaces/interfaces";

export default function ProductCardList(props: IProductCardListProps) {
  const { productList, handleAddToCart } = props;
  return (
    <>
      {productList.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
          index={index}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </>
  );
}

interface IProductCardListProps {
  productList: IProduct[];

  handleAddToCart: (product: IProduct) => void;
}
