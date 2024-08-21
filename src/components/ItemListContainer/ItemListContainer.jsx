import { Box } from "@chakra-ui/react";

const ItemListContainer = ({greeting}) => {
  return (
    <Box
      width={"100vw"}
      height={"90vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >

      {greeting}
    </Box>
  );
};

export default ItemListContainer;
