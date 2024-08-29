import { ChakraProvider, Flex, Spinner } from "@chakra-ui/react";
import { ItemListContainer } from "./components";
import MainLayout from "./layout/MainLayout";
import { useProducts, useProductsById } from "./hooks";

function App() {

  const { productsData, loading } = useProducts();
  const {productData} = useProductsById(1);

  return (
    <ChakraProvider>
      <MainLayout>
        {loading ? (
          <Flex
            width={"100%"}
            height={"90vh"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Spinner size="xl" />
          </Flex>
        ) : (
          <ItemListContainer products={productsData} />
        )}
      </MainLayout>
    </ChakraProvider>
  );
}

export default App;
