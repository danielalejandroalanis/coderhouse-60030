import React from "react";
import { getProductById } from "../services/products.service";

export const useProductById = (id) => {
  const [product, setProduct] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getProductById(id)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { product, loading };
};
