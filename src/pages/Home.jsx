import React from "react";
import { ItemListContainer } from "../components";
import { useProducts } from "../hooks/useProducts";
import { Flex, Spinner, Box } from "@chakra-ui/react";

export const Home = () => {
  const { products, loading, error } = useProducts();

  return loading ? (
    <Flex justifyContent={"center"} alignItems={"center"} h={"90vh"}>
      <Spinner />
    </Flex>
  ) : error ? (
    <Box>
      Hay un error durante la carga de los productos, por favor contactese con
      soporte.
    </Box>
  ) : (
    <ItemListContainer products={products} />
  );
};
