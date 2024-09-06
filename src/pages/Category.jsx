import React from "react";
import { useParams } from "react-router";
import { ItemListContainer } from "../components";
import { useProductsByCategory } from "../hooks";

export const Category = () => {
  const { categoryId } = useParams();

  const { products } = useProductsByCategory(categoryId);

  return <ItemListContainer products={products} />;
};
