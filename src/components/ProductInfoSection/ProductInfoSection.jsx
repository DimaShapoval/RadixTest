import {
  Box,
  Button,
  Flex,
  Heading,
  Select,
  Strong,
  Text,
} from "@radix-ui/themes";
import { useState } from "react";

export default function ProductInfoSection({ productInfo }) {
  const [showDirection, setShowFullDirection] = useState(false);
  const [selectValue, setSelectValue] = useState("black");

  const selectSize = (value) => {
    setSelectValue(value);
  };

  const addToCart = () => {
    const oldArray = localStorage.cartInfo
      ? JSON.parse(localStorage.cartInfo)
      : [];
    const cartInfo = {
      title: productInfo.title,
      price: productInfo.price,
      color: selectValue,
      image: productInfo.images[0],
      quantity: 1,
    };
    let existingItem = oldArray.find(
      (item) => item.title === cartInfo.title && item.color === cartInfo.color
    );
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      oldArray.push(cartInfo);
    }
    localStorage.setItem("cartInfo", JSON.stringify(oldArray));
  };

  return (
    <Flex ml={"4"} direction={"column"} maxWidth={"400px"}>
      <Heading as="h2">{productInfo.title}</Heading>
      <Text as="p" mt={"3"} size={"4"}>
        Category: <Strong>{productInfo?.category?.name}</Strong>
      </Text>
      <Flex
        maxHeight={showDirection ? "auto" : "83px"}
        width={"100%"}
        overflow={"hidden"}
      >
        <Text as="p" mt={"3"}>
          {productInfo.description}
        </Text>
      </Flex>
      <Box width={"50%"} minWidth={"150px"} mt={"4"}>
        <Button
          onClick={() => setShowFullDirection(!showDirection)}
          variant="outline"
        >
          {showDirection ? "Hide" : "Read"} full direction
        </Button>
      </Box>
      <Text as="p" mt={"4"}>
        Price: <Strong>{productInfo.price} $</Strong>
      </Text>
      <Flex mt={"4"} align={'center'}>
        <Text as="span" mr={'2'}>Color: </Text>
        <Select.Root size="2" value={selectValue} onValueChange={selectSize}>
          <Select.Trigger />
          <Select.Content>
            <Select.Item value="black">Black</Select.Item>
            <Select.Item value="white">White</Select.Item>
            <Select.Item value="pink">Pink</Select.Item>
            <Select.Item value="yellow">Yellow</Select.Item>
            <Select.Item value="red">Red</Select.Item>
            <Select.Item value="blue">Blue</Select.Item>
          </Select.Content>
        </Select.Root>
      </Flex>
      <Button onClick={addToCart} mt={"4"} size={"4"}>
        Add to cart
      </Button>
    </Flex>
  );
}
