import { ProductFilterContainer } from "../components/ProductFilter/ProductFilterContainer";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "react-use-cart";
import { IProduct } from "../interfaces/interfaces";
import { UserProductServices } from "../services/useProductServices";
import ProductCardList from "../components/productCard/ProductCardList";

export const ProductsPage = () => {
  const { addItem } = useCart();
  const [showModal, setShowModal] = useState<boolean>(false);
  const { allProducts, productList } = UserProductServices();

  const handleShow = () => setShowModal(true);

  const handleAddToCart = (product: IProduct) => {
    try {
      addItem({ ...product, quantity: 1 });

      // Notificación de éxito
      toast.success("Producto agregado al carrito correctamente", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      // Notificación de error
      toast.error("Error al agregar el producto al carrito", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  useEffect(() => {
    allProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ProductsPageItemFilter handleShow={handleShow} />

      <div className="product-page d-flex mx-auto" data-test="product-page">
        <ProductFilterContainer
          showModal={showModal}
          setShowModal={setShowModal}
        />

        <div className="d-flex flex-column w-100">
          <ProductsPageItemTitle />

          <div className="gridCardContainer px-4">
            <ProductCardList
              productList={productList}
              handleAddToCart={handleAddToCart}
            />
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
};

interface ProductsPageItemFilterProps {
  handleShow: () => void;
}

function ProductsPageItemTitle() {
  return (
    <div className="w-100 d-flex justify-content-center  p-4 m-0 ">
      <div className="position-relative text-center ">
        <h2
          className=""
          style={{
            color: "#a9a05d ",
            width: "300px",
            background: "whitesmoke",
            border: "#ccc8aa solid 1.5px",
          }}
        >
          Productos
        </h2>
        <div className="lineTitles"></div>
      </div>
    </div>
  );
}
function ProductsPageItemFilter(prop: ProductsPageItemFilterProps) {
  const { handleShow } = prop;

  return (
    <div className="toggleMenuFilter p-2" onClick={() => handleShow()}>
      <div
        className="d-flex justify-content-center align-items-center gap-1 mt-3 bg-warning rounded-end"
        style={{ width: "85px" }}
      >
        <i className="bi bi-funnel fs-6"></i>
        <div className=" d-flex justify-content-center align-items-center">
          <p className="m-0 fs-9">Filtros</p>
        </div>
      </div>
    </div>
  );
}
