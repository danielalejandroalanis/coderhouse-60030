import {
  Box,
  Card,
  Stack,
  Heading,
  CardBody,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";

const ItemListContainer = ({ products }) => {
  return (
    <Box display={"flex"} flexWrap={"wrap"}>
      {products.map((product, index) => (
        // <Card key={index} maxW="sm" marginTop={"1rem"}>
        <Card key={product.id} maxW="sm" margin={"1rem"}>
          <CardBody>
            <Image src={product.image} alt={product.name} borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md">{product.name}</Heading>
              <Text>{product.description}</Text>
              <Text color="blue.600" fontSize="2xl">
                {product.price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Buy now
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </Box>
  );
};

export default ItemListContainer;
