import { Flex, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { BsMinecart } from "react-icons/bs";
import { CartContext } from "../../context";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  const { cartState } = useContext(CartContext);

  const qtyTotalItems = cartState.reduce((acc, item) => acc + item.qtyItem, 0);
  return (
    <Link to="/checkout">
      <Flex
        alignItems={"center"}
        height={"100%"}
        justifyContent={"space-between"}
        width={"60px"}
      >
        <BsMinecart size={30} />
        <Text fontSize={"1.5rem"}>{qtyTotalItems}</Text>
      </Flex>
    </Link>
  );
};
