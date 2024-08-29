import { useState, useEffect } from "react";
import { getProductById } from "../services/products";

export const useProductsById = (id) => {
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id).then((res) => {
      console.log(res);
    });
  }, []);

  return {productData}
};
