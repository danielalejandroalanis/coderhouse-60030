import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const useProducts = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const productsCollection = collection(db, "products");
    getDocs(productsCollection)
      .then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
};
