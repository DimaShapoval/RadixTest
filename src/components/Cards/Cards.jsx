import { Box, Button, Card, Flex, Heading, Text } from "@radix-ui/themes";
import { NavLink, useNavigate } from "react-router-dom";

export default function Cards({ title, image, price, id }) {
    const navigator = useNavigate();
  return (
    <Card onClick={() => navigator(`/product/${id}`)} size="2">
      <Flex direction="column" gap="3">
        <Heading as="h5" size="2">
          {title}
        </Heading>
        <Box>
          <img style={{borderRadius: '5px'}} alt="product" width={"100%"} src={image} />
          <Text as="p" mt={'1'}>Price: {price} $</Text>
        </Box>
        <Button><NavLink to={`/product/${id}`}>More details</NavLink></Button>
      </Flex>
    </Card>
  );
}
