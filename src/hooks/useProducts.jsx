import { useEffect, useState } from "react";
import { getAllProducts } from "../services/products";

export const useProducts = (filter) => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProducts()
      .then((res) => {
        if (res.status === 200) {
          if (filter) {
            setProductsData(res.data.products);
          }
        } else {
          console.log("Error");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { productsData: productsData, loading: loading };
};
