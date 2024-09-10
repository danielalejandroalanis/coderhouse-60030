import React from "react";
import { useParams } from "react-router";
import { useProductById } from "../hooks";
import { ItemDetailContainer } from "../components";
export const Item = () => {
  const { id } = useParams();

  const { product, loading } = useProductById(id);

  return <ItemDetailContainer product={product} />;
};
