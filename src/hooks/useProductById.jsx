import React from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export const useProductById = (id) => {
  const [product, setProduct] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const productItem = doc(db, "products", id);
    getDoc(productItem)
      .then((snapshot) => {
        setProduct({ id: snapshot.id, ...snapshot.data() });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return { product, loading };
};
