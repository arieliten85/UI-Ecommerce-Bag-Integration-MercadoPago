import Slider from "react-slick";
import { useCart } from "react-use-cart";
import { settings } from "../settings/slider/ConfigResponsive";
import { IProduct } from "../interfaces/interfaces";
import ProductCard from "./productCard/ProductCard";

export const SliderProducts = ({
  productList,
  title,
}: CarouselPopularProductsProps) => {
  const { addItem } = useCart();

  const handleAddToCart = (product: IProduct) => {
    addItem({ ...product, quantity: 1 });
  };

  return (
    <div>
      <SliderItemTitle title={title} />
      <SliderItems
        productList={productList}
        settings={settings}
        handleAddToCart={handleAddToCart}
      />
    </div>
  );
};

interface CarouselPopularProductsProps {
  productList: IProduct[];
  title: string;
}
interface SliderItemTitleProps {
  title: string;
}
interface SliderSettings {
  dots: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  initialSlide: number;
  responsive: {
    breakpoint: number;
    settings: Partial<SliderSettings>;
  }[];
}
interface SliderItemsProps {
  productList: IProduct[];
  settings: SliderSettings;
  handleAddToCart: (product: IProduct) => void;
}
function SliderItems(props: SliderItemsProps) {
  const { productList, settings, handleAddToCart } = props;
  return (
    <div
      data-test="slick-container"
      className="mx-auto"
      style={{ width: "95%" }}
    >
      <Slider {...settings}>
        {productList.map((product, index) => (
          <div className="p-2" key={index}>
            <ProductCard
              handleAddToCart={handleAddToCart}
              index={index}
              product={product}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
function SliderItemTitle(props: SliderItemTitleProps) {
  const { title } = props;
  return (
    <div className="w-100 d-flex justify-content-center  p-5 m-0 ">
      <div className="position-relative text-center ">
        <h2
          className="p-2 py-1"
          style={{
            color: "#a9a05d ",
            width: "300px",
            background: "whitesmoke",
            border: "#ccc8aa solid 1.5px",
          }}
        >
          {title}
        </h2>
        <div className="lineTitles"></div>
      </div>
    </div>
  );
}
