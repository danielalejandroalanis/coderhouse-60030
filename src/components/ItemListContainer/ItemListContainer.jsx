import { Box } from "@chakra-ui/react";

// const ItemListContainer = (props) => { //Cualquiera de las dos formas es valida
const ItemListContainer = ({greeting}) => {
    // console.log(props)
  return (
    <Box
      width={"100vw"}
      height={"90vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      {/* {props.greeting} */}
      {greeting}
    </Box>
  );
};

export default ItemListContainer;

rafce
