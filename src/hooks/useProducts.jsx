import React from "react";
import { getAllProducts } from "../services/products.service";

export const useProducts = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    getAllProducts()
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
};
