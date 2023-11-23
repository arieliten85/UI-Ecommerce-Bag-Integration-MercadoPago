import { SliderProducts } from "../components/SliderProducts";
import { CategoryGrid } from "../components/CategoryGrid";
import { useEffect } from "react";
import { MyCarousel } from "../components/MyCarousel";
import { categories, slides } from "../services/api";
import { UserProductServices } from "../services/useProductServices";

export const HomePage = () => {
  const { allProducts, productList } = UserProductServices();

  useEffect(() => {
    allProducts();
  }, []);

  return (
    <div data-test="home-page">
      <MyCarousel slides={slides} />
      <SliderProducts productList={productList} title={"Mas vendidos"} />
      <SliderProducts productList={productList} title={"Bolso de mano"} />
      <CategoryGrid categories={categories} />
    </div>
  );
};
