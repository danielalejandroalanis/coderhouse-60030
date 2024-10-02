import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const useCategory = () => {
  const [category, setCategory] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const productsCollection = collection(db, "categories");

    getDocs(productsCollection)
      .then((snapshot) => {
        setCategory(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return { category, loading };
};
