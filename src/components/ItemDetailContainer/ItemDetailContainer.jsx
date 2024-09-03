import {
  Card,
  Stack,
  Heading,
  CardBody,
  Divider,
  Image,
  Text,
} from "@chakra-ui/react";
export const ItemDetailContainer = ({ product }) => {
  return (
    <Card key={product.id} maxW="sm" margin={"1rem"}>
      <CardBody>
        <Image src={product.thumbnail} alt={product.name} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{product.title}</Heading>
          <Text>{product.description}</Text>
          <Text color="blue.600" fontSize="2xl">
            {product.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
    </Card>
  );
};
