import { Avatar, Box, Card, Flex, Strong, Text } from "@radix-ui/themes";

export default function CartItems({
  title,
  size,
  image,
  price,
  quantity,
  handleValue,
  handleDelete,
}) {
  function deleteItem() {
    let oldArray = localStorage.cartInfo
      ? JSON.parse(localStorage.cartInfo)
      : [];
    let index = oldArray.findIndex(
      (item) => item.title === title && item.size === size
    );
    if (index !== -1) {
      oldArray.splice(index, 1);
      localStorage.setItem("cartInfo", JSON.stringify(oldArray));
      handleDelete(!handleValue);
    }
  }

  return (
    <Card size="3" mt={"2"}>
      <Flex gap="4" align="center">
        <Avatar
          size="5"
          src={image}
          radius="full"
          fallback="T"
          color="indigo"
        />
        <Box width={"100%"}>
          <Flex justify={"between"} width={"100%"}>
            <Text as="div" size="4" weight="bold">
              {title}
            </Text>
            <Box onClick={deleteItem}>
              <svg
                width="25"
                height="25"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4L3.5 4C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Box>
          </Flex>
          {size ? (
            <Text as="div" size="4">
              Size: <Strong>{size}</Strong>
            </Text>
          ) : null}

          <Text as="div" size="4" color="">
            Price: <Strong>{price} $</Strong>
          </Text>
          <Text as="div" size="4" color="">
            Quantity: <Strong>{quantity}</Strong>
          </Text>
        </Box>
      </Flex>
    </Card>
  );
}
