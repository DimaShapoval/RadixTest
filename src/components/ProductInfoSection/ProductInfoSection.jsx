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
  const [selectValue, setSelectValue] = useState("m");

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
      size: productInfo.category.name === 'Clothes' ? selectValue : false,
      image: productInfo.images[0],
      quantity: 1,
    };
    let existingItem = oldArray.find(
      (item) => item.title === cartInfo.title && item.size === cartInfo.size
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
      {productInfo?.category?.name === 'Clothes' ?  <Box mt={"4"}>
        <Select.Root size="2" value={selectValue} onValueChange={selectSize}>
          <Select.Trigger />
          <Select.Content>
            <Select.Item value="xs">XS</Select.Item>
            <Select.Item value="s">S</Select.Item>
            <Select.Item value="m">M</Select.Item>
            <Select.Item value="l">L</Select.Item>
            <Select.Item value="xl">XL</Select.Item>
            <Select.Item value="xxl">XXL</Select.Item>
          </Select.Content>
        </Select.Root>
      </Box> : null }
     
      <Button onClick={addToCart} mt={"4"} size={"4"}>
        Add to cart
      </Button>
    </Flex>
  );
}
