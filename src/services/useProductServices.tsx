import { useState } from "react";
import { IMessage, IProduct, IServerResponse } from "../interfaces/interfaces";
import axios, { AxiosError } from "axios";

export const UserProductServices = () => {
  const [productList, setProductList] = useState<IProduct[]>([]);
  const [message, setMessage] = useState<IMessage>();

  const allProducts = async () => {
    try {
      const products = await axios.get("http://localhost:8000/api/product/");
      setProductList(products.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<IServerResponse>;
        if (axiosError.response) {
          setMessage({
            status: true,
            error: true,
            message: axiosError.response.data.message,
          });
        }
      }
    }
  };

  return {
    allProducts,
    productList,
    message,
  };
};
